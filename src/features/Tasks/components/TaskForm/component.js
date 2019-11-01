import React from 'react';
import PropTypes from 'prop-types';

const TaskFormComponent = (props) => {
  const {
    formValues,
    onUsernameChange,
    onEmailChange,
    onTextChange,
    onFormSubmit,
  } = props;

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="userName">Username</label>
        <input type="text" className="form-control" id="userName" value={formValues.username} onChange={onUsernameChange} placeholder="Steve" />
      </div>
      <div className="form-group">
        <label htmlFor="userEmail">Email address</label>
        <input type="email" className="form-control" id="userEmail" value={formValues.email} onChange={onEmailChange} placeholder="name@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="taskDescription">Task description</label>
        <textarea className="form-control" id="taskDescription" value={formValues.text} onChange={onTextChange} placeholder="Description" />
      </div>
      <button type="submit" className="btn btn-primary">Create task</button>
    </form>
  );
};

TaskFormComponent.propTypes = {
  formValues: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onUsernameChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onTextChange: PropTypes.func,
  onFormSubmit: PropTypes.func,
};

TaskFormComponent.defaultProps = {
  onUsernameChange: () => {},
  onEmailChange: () => {},
  onTextChange: () => {},
  onFormSubmit: () => {},
};

export default TaskFormComponent;
