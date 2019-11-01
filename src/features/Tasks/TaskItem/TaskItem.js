import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const TaskItem = ({ task }) => (
  <li className="list-group-item">
    <div className={styles.header}>
      <h5 className={styles.title}>
        {`${task.username} (${task.email})`}
      </h5>
      <span className={styles.status}>
        <strong>Status:&nbsp;</strong>
        { task.status === 10 ? 'Done' : 'Not done yet' }
      </span>
    </div>
    <p className={styles.text}>
      {task.text}
    </p>
  </li>
);

TaskItem.propTypes = {
  task: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.number,
  }).isRequired,
};

export default TaskItem;
