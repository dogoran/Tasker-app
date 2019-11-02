import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TaskFormComponent = (props) => {
  const {
    formValues,
    onUsernameChange,
    onEmailChange,
    onTextChange,
    onFormSubmit,
  } = props;
  const userNameInputClassList = classNames(
    'form-control',
    {
      'is-invalid': formValues.errors.username,
    },
  );
  const emailInputClassList = classNames(
    'form-control',
    {
      'is-invalid': formValues.errors.email,
    },
  );
  const textInputClassList = classNames(
    'form-control',
    {
      'is-invalid': formValues.errors.text,
    },
  );

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="userName">Username</label>
        <input type="text" className={userNameInputClassList} id="userName" value={formValues.username} onChange={onUsernameChange} placeholder="Steve" />
        {formValues.errors.username && (
          <div className="invalid-feedback">
            {formValues.errors.username}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="userEmail">Email address</label>
        <input type="email" className={emailInputClassList} id="userEmail" value={formValues.email} onChange={onEmailChange} placeholder="name@example.com" />
        {formValues.errors.email && (
          <div className="invalid-feedback">
            {formValues.errors.email}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="taskDescription">Task description</label>
        <textarea className={textInputClassList} id="taskDescription" value={formValues.text} onChange={onTextChange} placeholder="Description" />
        {formValues.errors.text && (
          <div className="invalid-feedback">
            {formValues.errors.text}
          </div>
        )}
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
    errors: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
      text: PropTypes.string,
    }),
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
