import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';

import { validateTaskForm } from 'utils/validation';

import TaskFormComponent from './component';
import { createTaskThunk, updateFormValues } from '../../actions';

export class TaskFormContainer extends React.Component {
  handleUsernameChange = (event) => {
    this.props.updateFormValues({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.props.updateFormValues({ email: event.target.value });
  };

  handleTextChange = (event) => {
    this.props.updateFormValues({ text: event.target.value });
  };

  handleCreateTask = (event) => {
    event.preventDefault();

    const validationErrors = validateTaskForm(this.props.formValues, 'CREATE_TASK');

    this.props.updateFormValues({ errors: validationErrors });

    if (!isEmpty(validationErrors)) {
      return;
    }

    const formValues = { ...this.props.formValues };
    const formData = new FormData();

    formData.append('username', formValues.username);
    formData.append('email', formValues.email);
    formData.append('text', formValues.text);

    this.props.createTaskThunk(formData);
  };

  render() {
    return (
      <TaskFormComponent
        onUsernameChange={this.handleUsernameChange}
        onEmailChange={this.handleEmailChange}
        onTextChange={this.handleTextChange}
        onFormSubmit={this.handleCreateTask}
        formValues={this.props.formValues}
      />
    );
  }
}

TaskFormContainer.propTypes = {
  formValues: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  createTaskThunk: PropTypes.func,
  updateFormValues: PropTypes.func,
};

TaskFormContainer.defaultProps = {
  createTaskThunk: () => {},
  updateFormValues: () => {},
};

const mapStateToProps = (state) => ({
  formValues: state.tasks.formValues,
});

const mapDispatchToProps = {
  updateFormValues,
  createTaskThunk,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskFormContainer);
