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
      dispatch(login(data.message));
    })
);
