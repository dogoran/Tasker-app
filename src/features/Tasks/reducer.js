import { RECEIVE_TASKS, UPDATE_FORM_VALUES, CLEAR_FORM_VALUES } from './types';

export const initialState = {
  tasks: [],
  formValues: {
    username: '',
    email: '',
    text: '',
  },
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return {
        ...state,
        tasks: action.payload,
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

    default:
      return state;
  }
}
