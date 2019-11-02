import { setCookie } from 'utils/cookie';

import {
  LOGIN_SUCCESS,
  UPDATE_FORM_VALUES,
} from './types';

export const login = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
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
        dispatch(login(true));
      }
    })
);
