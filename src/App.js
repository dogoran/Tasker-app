import React from 'react';

import TasksList from './features/Tasks/components/TasksList';
import TaskForm from './features/Tasks/components/TaskForm';
import styles from './styles.module.scss';
import Pagination from './features/Tasks/components/Pagination';

const App = () => (
  <div className="container">
    <div className={styles.taskFormWrapper}>
      <TaskForm />
    </div>
    <div className={styles.paginationWrapper}>
      <Pagination />
    </div>
    <TasksList />
  </div>
);

export default App;
