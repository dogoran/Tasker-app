import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
    >
      <Link
        className="page-link"
        to={`/page/${page}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Link>
    </li>
  );
};

PaginationComponent.propTypes = {
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationComponent;
