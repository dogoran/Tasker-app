import { toast } from 'react-toastify';

import {
  RECEIVE_TASKS,
  UPDATE_FORM_VALUES,
  CLEAR_FORM_VALUES,
  SET_PAGE,
  SET_SORT_TYPE,
  SET_SORT_DIRECTION,
  UPDATE_EDIT_FORM_VALUES,
  CLEAR_EDIT_FORM_VALUES,
  OPEN_EDIT_FORM,
  CLOSE_EDIT_FORM,
} from './types';

export const receiveTasks = (payload) => ({
  type: RECEIVE_TASKS,
  payload,
});

export const updateFormValues = (payload) => ({
  type: UPDATE_FORM_VALUES,
  payload,
});

export const updateEditFormValues = (payload) => ({
  type: UPDATE_EDIT_FORM_VALUES,
  payload,
});

export const clearFormValues = (payload) => ({
  type: CLEAR_FORM_VALUES,
  payload,
});

export const clearEditFormValues = (payload) => ({
  type: CLEAR_EDIT_FORM_VALUES,
  payload,
});

export const setPage = (payload) => ({
  type: SET_PAGE,
  payload,
});

export const setSortType = (payload) => ({
  type: SET_SORT_TYPE,
  payload,
});

export const setSortDirection = (payload) => ({
  type: SET_SORT_DIRECTION,
  payload,
});

export const openEditForm = (payload) => ({
  type: OPEN_EDIT_FORM,
  payload,
});

export const closeEditForm = () => ({
  type: CLOSE_EDIT_FORM,
});

export const fetchTasks = (page = 0) => (dispatch, state, api) => {
  const updatedPage = page || state().tasks.currentPage;
  const query = `?page=${updatedPage}&sort_field=${state().tasks.sortType}&sort_direction=${state().tasks.sortDirection}`;

  return (
    api(query, 'get')
      .then((response) => {
        dispatch(receiveTasks(response.data.message));
        dispatch(setPage(updatedPage));
      })
  );
};

export const createTaskThunk = (body) => (dispatch, state, api) => (
  api('create/', 'post', body)
    .then((response) => {
      if (response.data.status !== 'error') {
        dispatch(fetchTasks());
        dispatch(clearFormValues());

        toast.success('Task created!');
      } else {
        toast.error('Server responded with error');
      }
    })
);

export const editTaskThunk = (taskId, body) => (dispatch, state, api) => (
  api(`edit/${taskId}`, 'post', body)
    .then((response) => {
      if (response.data.status !== 'error') {
        dispatch(fetchTasks());
        dispatch(clearEditFormValues());
        dispatch(closeEditForm());

        toast.success('Task updated!');
      } else {
        toast.error('Server responded with error');
      }
    })
);
