import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const LoginFormComponent = (props) => {
  const { formValues } = { ...props };
  const usernameInputClassList = classNames(
    'form-control',
    {
      'is-invalid': formValues.errors.username,
    },
  );
  const passwordInputClassList = classNames(
    'form-control',
    {
      'is-invalid': formValues.errors.password,
    },
  );

  return (
    <form onSubmit={props.onLogin}>
      <div className="form-group">
        <label htmlFor="usernameInput">
          Username
        </label>
        <input
          type="username"
          className={usernameInputClassList}
          id="usernameInput"
          placeholder="Enter username"
          value={formValues.username}
          onChange={props.onUsernameChange}
        />
        {formValues.errors.username && (
          <div className="invalid-feedback">
            {formValues.errors.username}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="passwordInput">
          Password
        </label>
        <input
          type="password"
          className={passwordInputClassList}
          id="passwordInput"
          placeholder="Password"
          value={formValues.password}
          onChange={props.onPasswordChange}
        />
        {formValues.errors.password && (
          <div className="invalid-feedback">
            {formValues.errors.password}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

LoginFormComponent.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
};

export default LoginFormComponent;
