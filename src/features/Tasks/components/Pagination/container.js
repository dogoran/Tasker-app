/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Pagination from './component';
import { fetchTasks } from '../../actions';
import { ITEMS_PER_PAGE } from '../../../../constants/constants';

class PaginationContainer extends Component {
  handlePageChange = (page) => {
    this.props.fetchTasks(page);
  };

  render() {
    const pagesCount = Math.ceil(this.props.tasksTotalCount / ITEMS_PER_PAGE);
    const controls = [];

    for (let page = 1; page <= pagesCount; page += 1) {
      controls.push(
        <Pagination
          key={`page${page}`}
          page={page}
          currentPage={this.props.currentPage}
          onPageChange={this.handlePageChange}
        />,
      );
    }

    return (
      <nav>
        <ul className="pagination">
          { controls }
        </ul>
      </nav>
    );
  }
}

PaginationContainer.propTypes = {
  tasksTotalCount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  currentPage: PropTypes.number.isRequired,
  fetchTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tasksTotalCount: state.tasks.tasksTotalCount,
  currentPage: state.tasks.currentPage,
});

const mapDispatchToProps = {
  fetchTasks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationContainer);
