import { RECEIVE_TASKS } from './types';

export const receiveTasks = (payload) => ({
  type: RECEIVE_TASKS,
  payload,
});

export const fetchTasks = () => (dispatch, state, api) => (
  api('/', 'get')
    .then((response) => {
      dispatch(receiveTasks(response.data.message.tasks));
    })
);
