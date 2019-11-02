import React from 'react';

import TasksList from './features/Tasks/components/TasksList';
import TaskForm from './features/Tasks/components/TaskForm';
import styles from './styles.module.scss';
import Pagination from './features/Tasks/components/Pagination';
import Filter from './features/Tasks/components/Filter';

const App = () => (
  <div className="container">
    <div className={styles.taskFormWrapper}>
      <TaskForm />
    </div>
    <div className={styles.filterWrapper}>
      <Filter />
    </div>
    <TasksList />
    <div className={styles.paginationWrapper}>
      <Pagination />
    </div>
  </div>
);

export default App;
