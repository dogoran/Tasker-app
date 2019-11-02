import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSortType, setSortDirection, fetchTasks } from '../../actions';
import FilterComponent from './component';

export class FilterContainer extends React.Component {
  handleSortTypeSelect = (event) => {
    this.props.setSortType(event.target.value);
    this.props.fetchTasks();
  };

  handleSortDirectionSelect = (event) => {
    this.props.setSortDirection(event.target.value);
    this.props.fetchTasks();
  };

  render() {
    return (
      <FilterComponent
        onSortTypeSelect={this.handleSortTypeSelect}
        onSortDirectionSelect={this.handleSortDirectionSelect}
        sortType={this.props.sortType}
        sortDirection={this.props.sortDirection}
      />
    );
  }
}

FilterContainer.propTypes = {
  formValues: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func,
  setSortDirection: PropTypes.func,
  fetchTasks: PropTypes.func,
};

FilterContainer.defaultProps = {
  setSortType: () => {},
  setSortDirection: () => {},
  fetchTasks: () => {},
};

const mapStateToProps = (state) => ({
  formValues: state.tasks.formValues,
  sortType: state.tasks.sortType,
  sortDirection: state.tasks.sortDirection,
});

const mapDispatchToProps = {
  setSortType,
  setSortDirection,
  fetchTasks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterContainer);
