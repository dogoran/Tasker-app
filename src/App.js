import React from 'react';

import TasksList from './features/Tasks/components/TasksList';
import TaskForm from './features/Tasks/components/TaskForm';
import styles from './styles.module.scss';

const App = () => (
  <div className="container">
    <div className={styles.taskFormWrapper}>
      <TaskForm />
    </div>
    <TasksList />
  </div>
);

export default App;
