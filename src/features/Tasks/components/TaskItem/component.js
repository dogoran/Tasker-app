import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isTokenValid } from 'utils/cookie';

import styles from './styles.module.scss';

const TaskItemComponent = (props) => {
  const { task, isEditFormOpen, formValues } = { ...props };
  const groupItemClassList = classNames('list-group-item', styles.item);
  const buttonClassList = classNames('btn btn-sm btn-secondary', styles.controlButton);
  const textAreaClassList = classNames(
    'form-control',
    styles.text,
    {
      'is-invalid': formValues.errors.text,
    },
  );
  const statusSelectClassList = classNames(
    'custom-select',
    styles.status,
    {
      'is-invalid': formValues.errors.status,
    },
  );
  const isEditAllowed = props.isLogged && isTokenValid() && !isEditFormOpen;

  return (
    <li className={groupItemClassList}>
      <div className={styles.header}>
        <h5 className={styles.title}>
          {`${task.username} (${task.email})`}
        </h5>
        <span className={styles.status}>
          {
            isEditFormOpen
              ? (
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="statusSelect">Status</label>
                  </div>
                  <select
                    className={statusSelectClassList}
                    id="statusSelect"
                    onChange={props.onStatusChange}
                    value={formValues.status}
                  >
                    <option value="0">Not done yet</option>
                    <option value="10">Done</option>
                  </select>
                </div>
              )
              : (
                <>
                  <strong>Status:&nbsp;</strong>
                  { task.status === 10 ? 'Done' : 'Not done yet' }
                </>
              )
          }
        </span>
      </div>
      {
        isEditFormOpen
          ? (
            <>
              <textarea
                className={textAreaClassList}
                value={formValues.text}
                onChange={props.onTextChange}
              />
            </>
          )
          : (
            <p className={styles.text}>
              {task.text}
            </p>
          )
      }
      {
        isEditAllowed && (
          <button
            type="button"
            className="btn btn-sm btn-primary float-right"
            onClick={() => props.onEditFormOpen(task.id)}
          >
            Edit
          </button>
        )
      }
      {
        isEditFormOpen && (
          <div className={styles.controls}>
            <button type="button" className={buttonClassList} onClick={props.onTaskEdit}>Save</button>
            <button type="button" className={buttonClassList} onClick={props.onEditFormClose}>Cancel</button>
          </div>
        )
      }
    </li>
  );
};

TaskItemComponent.propTypes = {
  task: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.number,
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onEditFormOpen: PropTypes.func.isRequired,
  onEditFormClose: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default TaskItemComponent;
