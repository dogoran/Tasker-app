import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ITEMS_PER_PAGE } from 'constants/constants';

import TasksList from './component';
import * as actions from '../../actions';


export class TasksListContainer extends React.Component {
  componentDidMount() {
    const pagesCount = Math.ceil(this.props.tasksTotalCount / ITEMS_PER_PAGE);

    if (this.props.match
      && +this.props.match.params.page !== this.props.currentPage
      && +this.props.match.params.page <= pagesCount) {
      this.props.fetchTasks(this.props.match.params.page);
    } else {
      this.props.fetchTasks();
    }
  }

  render() {
    return (
      this.props.tasks.length
        ? <TasksList {...this.props} />
        : <p>Список задач пуст.</p>
    );
  }
}

TasksListContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
    }),
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.number,
  })).isRequired,
  fetchTasks: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  tasksTotalCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  currentPage: state.tasks.currentPage,
  tasksTotalCount: state.tasks.tasksTotalCount,
});

const mapDispatchToProps = {
  fetchTasks: actions.fetchTasks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksListContainer);
