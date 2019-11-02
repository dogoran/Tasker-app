import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';

import { validateTaskForm } from 'utils/validation';
import { getCookie } from 'utils/cookie';

import TaskItemComponent from './component';
import {
  updateEditFormValues,
  editTaskThunk,
  openEditForm,
  closeEditForm,
  clearEditFormValues,
} from '../../actions';

export class TaskItemContainer extends React.Component {
  handleOpenEditForm = (id) => {
    this.props.openEditForm(id);
  };

  handleCloseEditForm = () => {
    this.props.closeEditForm();
    this.props.clearEditFormValues();
  };

  handleStatusChange = (event) => {
    this.props.updateEditFormValues({ status: event.target.value });
  };

  handleTextChange = (event) => {
    this.props.updateEditFormValues({ text: event.target.value });
  };

  handleEdit = (event) => {
    event.preventDefault();

    const validationErrors = validateTaskForm(this.props.formValues, 'EDIT_TASK');

    this.props.updateEditFormValues({ errors: validationErrors });

    if (!isEmpty(validationErrors)) {
      return;
    }

    const formValues = new FormData();

    formValues.append('status', this.props.formValues.status);
    formValues.append('text', this.props.formValues.text);
    formValues.append('token', getCookie('token'));

    this.props.editTaskThunk(this.props.task.id, formValues);
  };

  render() {
    const isEditFormOpen = this.props.isEditFormOpen
      && this.props.taskInEdit === this.props.task.id;

    return (
      <TaskItemComponent
        {...this.props}
        onStatusChange={this.handleStatusChange}
        onTextChange={this.handleTextChange}
        onEditFormOpen={this.handleOpenEditForm}
        onEditFormClose={this.handleCloseEditForm}
        isEditFormOpen={isEditFormOpen}
        onTaskEdit={this.handleEdit}
        formValues={this.props.formValues}
      />
    );
  }
}

TaskItemContainer.propTypes = {
  formValues: PropTypes.shape({
    status: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  task: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  updateEditFormValues: PropTypes.func.isRequired,
  openEditForm: PropTypes.func.isRequired,
  closeEditForm: PropTypes.func.isRequired,
  clearEditFormValues: PropTypes.func.isRequired,
  editTaskThunk: PropTypes.func.isRequired,
  isEditFormOpen: PropTypes.bool,
  taskInEdit: PropTypes.number,
};

TaskItemContainer.defaultProps = {
  isEditFormOpen: false,
  taskInEdit: 0,
};

const mapStateToProps = (state) => ({
  formValues: state.tasks.editTaskFormValues,
  isEditFormOpen: state.tasks.isEditFormOpen,
  taskInEdit: state.tasks.taskInEdit,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {
  updateEditFormValues,
  editTaskThunk,
  openEditForm,
  closeEditForm,
  clearEditFormValues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskItemContainer);
