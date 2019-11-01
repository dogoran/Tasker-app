import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

const PaginationComponent = ({ page, onPageChange, currentPage }) => {
  const paginationItemClassList = classNames(
    styles.paginationItem,
    'page-item',
    {
      'active': currentPage === page,
    },
  );

  return (
    <li
      className={paginationItemClassList}
      onClick={() => onPageChange(page)}
    >
      <span className="page-link">
        {page}
      </span>
    </li>
  );
};

PaginationComponent.propTypes = {
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationComponent;
