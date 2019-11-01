import React from 'react';
import PropTypes from 'prop-types';

import TaskItem from '../TaskItem';

const TasksListComponent = (props) => (
  <ul className="list-group">
    {
      props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))
    }
  </ul>
);

TasksListComponent.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.number,
  })).isRequired,
};

export default TasksListComponent;
