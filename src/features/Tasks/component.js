import React from 'react';

import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';
import styles from './styles.module.scss';
import Pagination from './components/Pagination';
import Filter from './components/Filter';

const Tasks = (props) => (
  <>
    <div className={styles.taskFormWrapper}>
      <TaskForm />
    </div>
    <div className={styles.filterWrapper}>
      <Filter />
    </div>
    <TasksList {...props} />
    <div className={styles.paginationWrapper}>
      <Pagination />
    </div>
  </>
);

export default Tasks;
