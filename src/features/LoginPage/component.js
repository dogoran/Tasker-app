import React from 'react';
import classNames from 'classnames';

import LoginForm from './components/LoginForm';
import styles from './styles.module.scss';

const LoginPage = (props) => {
  const loginFormWrapperClassName = classNames('col-4', 'mx-auto', styles.loginFormWrapper);

  return (
    <div className={loginFormWrapperClassName}>
      <LoginForm {...props} />
    </div>
  );
};

export default LoginPage;
