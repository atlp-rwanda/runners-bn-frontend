import axios from 'axios';

import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from './actionTypes';

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = (authData) => ({
  type: AUTH_SUCCESS,
  authData,
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  error,
});

export const auth = (firstName, lastName, email, password, confirmPassword) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  };
  const url = 'https://runners-bn-backend.herokuapp.com/api/v1/users/signup';
  return axios
    .post(url, authData)
    .then((response) => {
      dispatch(authSuccess(response.data));
    })
    .catch((error) => {
      const message = (error.response || error.message || error.request || error.toString());
      dispatch(authFail(message));
    });
};
