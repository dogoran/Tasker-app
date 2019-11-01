import {
  RECEIVE_TASKS,
  UPDATE_FORM_VALUES,
  CLEAR_FORM_VALUES,
  SET_PAGE,
} from './types';

export const receiveTasks = (payload) => ({
  type: RECEIVE_TASKS,
  payload,
});

export const updateFormValues = (payload) => ({
  type: UPDATE_FORM_VALUES,
  payload,
});

export const clearFormValues = (payload) => ({
  type: CLEAR_FORM_VALUES,
  payload,
});

export const setPage = (payload) => ({
  type: SET_PAGE,
  payload,
});

export const fetchTasks = (page = 1) => (dispatch, state, api) => (
  api(`?page=${page}`, 'get')
    .then((response) => {
      dispatch(receiveTasks(response.data.message));
      dispatch(setPage(page));
    })
);

export const createTaskThunk = (body) => (dispatch, state, api) => (
  api('create', 'post', body)
    .then((response) => {
      if (response.data.status !== 'error') {
        dispatch(fetchTasks());
        dispatch(clearFormValues());
      }
    })
);
