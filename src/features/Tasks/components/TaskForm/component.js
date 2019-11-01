import React from 'react';

const TaskFormComponent = (props) => (
  <form>
    <div className="form-group">
      <label htmlFor="userName">Username</label>
      <input type="text" className="form-control" id="userName" placeholder="Steve" />
    </div>
    <div className="form-group">
      <label htmlFor="userEmail">Email address</label>
      <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" />
    </div>
    <div className="form-group">
      <label htmlFor="taskDescription">Task description</label>
      <textarea className="form-control" id="taskDescription" />
    </div>
    <button type="submit" className="btn btn-primary">Create task</button>
  </form>
);

export default TaskFormComponent;
