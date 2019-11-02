import { setCookie } from 'utils/cookie';

import {
  LOGIN_SUCCESS,
  UPDATE_FORM_VALUES,
  LOGOUT,
} from './types';

export const login = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateFormValues = (payload) => ({
  type: UPDATE_FORM_VALUES,
  payload,
});

export const fetchLogin = (user) => (dispatch, state, api) => (
  api('login/', 'post', user)
    .then((response) => response.data)
    .then((data) => {
      if (data.status !== 'error') {
        setCookie(data.message, 86400);
        dispatch(login());
      } else {
        dispatch(updateFormValues({ errors: data.message }));
      }
    })
);
