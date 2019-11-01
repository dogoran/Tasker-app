import { RECEIVE_TASKS } from './types';

export const initialState = {
  tasks: [],
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
}
