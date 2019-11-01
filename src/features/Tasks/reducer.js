import {
  RECEIVE_TASKS,
  UPDATE_FORM_VALUES,
  CLEAR_FORM_VALUES,
  SET_PAGE,
} from './types';

export const initialState = {
  tasks: [],
  formValues: {
    username: '',
    email: '',
    text: '',
  },
  tasksTotalCount: 0,
  currentPage: 1,
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
        tasksTotalCount: action.payload.total_task_count,
      };

    case UPDATE_FORM_VALUES:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          ...action.payload,
        },
      };

    case CLEAR_FORM_VALUES:
      return {
        ...state,
        formValues: {
          username: '',
          email: '',
          text: '',
        },
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}
