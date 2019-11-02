import React from 'react';
import PropTypes from 'prop-types';

const FilterComponent = (props) => (
  <div className="input-group">
    <div className="input-group-prepend">
      <label className="input-group-text" htmlFor="inputGroupSelect01">Sort by</label>
    </div>
    <select
      className="custom-select"
      id="inputGroupSelect01"
      value={props.sortType}
      onChange={props.onSortTypeSelect}
    >
      <option value="id">task id</option>
      <option value="username">username</option>
      <option value="email">user email</option>
      <option value="status">task status</option>
    </select>
    <div className="input-group-prepend">
      <label className="input-group-text" htmlFor="inputGroupSelect02">Sort direction</label>
    </div>
    <select
      className="custom-select"
      id="inputGroupSelect02"
      value={props.sortDirection}
      onChange={props.onSortDirectionSelect}
    >
      <option value="ASC">ASC</option>
      <option value="DESC">DESC</option>
    </select>
  </div>
);

FilterComponent.propTypes = {
  sortType: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  onSortDirectionSelect: PropTypes.func,
  onSortTypeSelect: PropTypes.func,
};

FilterComponent.defaultProps = {
  onSortDirectionSelect: () => {},
  onSortTypeSelect: () => {},
};

export default FilterComponent;
