import {
  LOGIN_SUCCESS,
} from './types';

export const initialState = {
  isLogged: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
      };

    default:
      return state;
  }
}
