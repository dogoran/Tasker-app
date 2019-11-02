import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TasksList from './component';
import * as actions from '../../actions';


export class TasksListContainer extends React.Component {
  componentDidMount() {
    if (this.props.match
      && +this.props.match.params.page !== this.props.currentPage) {
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
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  currentPage: state.tasks.currentPage,
});

const mapDispatchToProps = {
  fetchTasks: actions.fetchTasks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksListContainer);
