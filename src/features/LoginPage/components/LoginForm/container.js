import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginFormComponent from './component';
import { fetchLogin } from '../../actions';

export class LoginFormContainer extends React.Component {
  handleLogin = (event) => {
    event.preventDefault();

    this.props.fetchLogin();
  };

  render() {
    return (
      <LoginFormComponent
        formValues={this.props.formValues}
      />
    );
  }
}

LoginFormContainer.propTypes = {
  formValues: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

LoginFormContainer.defaultProps = {
};

const mapStateToProps = (state) => ({
  formValues: state.auth.formValues,
});

const mapDispatchToProps = {
  fetchLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainer);
