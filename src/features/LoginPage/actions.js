import {
  LOGIN_SUCCESS,
} from './types';

export const login = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const fetchLogin = (user) => (dispatch, state, api) => (
  api('login/', 'post', user)
    .then((response) => response.data)
    .then((data) => {
      dispatch(login(data.message));
    })
);
