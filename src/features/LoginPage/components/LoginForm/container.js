import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';

import { validateTaskForm } from 'utils/validation';

import LoginFormComponent from './component';
import { fetchLogin, updateFormValues } from '../../actions';

export class LoginFormContainer extends React.Component {
  handleUsernameChange = (event) => {
    this.props.updateFormValues({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.props.updateFormValues({ password: event.target.value });
  };

  handleLogin = (event) => {
    event.preventDefault();

    const validationErrors = validateTaskForm(this.props.formValues, 'LOGIN_FORM');

    this.props.updateFormValues({ errors: validationErrors });

    if (!isEmpty(validationErrors)) {
      return;
    }

    const formValues = new FormData();

    formValues.append('username', this.props.formValues.username);
    formValues.append('password', this.props.formValues.password);

    this.props.fetchLogin(formValues);
  };

  render() {
    return (
      <LoginFormComponent
        formValues={this.props.formValues}
        onUsernameChange={this.handleUsernameChange}
        onPasswordChange={this.handlePasswordChange}
        onLogin={this.handleLogin}
      />
    );
  }
}

LoginFormContainer.propTypes = {
  formValues: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  fetchLogin: PropTypes.func.isRequired,
  updateFormValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  formValues: state.auth.formValues,
});
const mapDispatchToProps = {
  fetchLogin,
  updateFormValues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainer);
