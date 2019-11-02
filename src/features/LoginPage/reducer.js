import {
  LOGIN_SUCCESS,
  UPDATE_FORM_VALUES,
} from './types';

export const initialState = {
  isLogged: false,
  formValues: {
    username: '',
    password: '',
    errors: {},
  },
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
      };

    case UPDATE_FORM_VALUES:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}
