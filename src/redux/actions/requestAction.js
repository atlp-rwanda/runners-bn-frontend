/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../../helpers/url';
import {
  GETTING_REQUESTS_ERROR,
  GETTING_REQUESTS_SUCCESS,
  EDIT_REQUESTS_ERROR,
  EDIT_REQUESTS_SUCCESS,
  CREATE_REQUESTS_ERROR,
  CREATE_REQUESTS_SUCCESS,
} from './actionTypes';

export const getRequestsAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'GET',
      url: `${BACKEND_URL}/api/v1/trips/`,
      headers: {
        authorization: authHeader,
      },
    });
    const { data } = response.data;
    // data.forEach(({ destination, departure }) => console.log(`destination is ${destination.name} departure is ${departure.name}`));

    dispatch({
      type: GETTING_REQUESTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GETTING_REQUESTS_ERROR,
      payload: error.response,
    });
  }
};

export const createRequestsAction = (newRequest) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'POST',
      url: `${BACKEND_URL}/api/v1/trips/new`,
      headers: {
        'Content-Type': 'application/json',
        authorization: authHeader,
      },
      data: newRequest,
    });
    response.status === 201 ? toast.success('requests created') : null;
    dispatch({ type: CREATE_REQUESTS_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 500
      ? toast.info('requests already exists')
      : null;
    dispatch({ type: CREATE_REQUESTS_ERROR, payload: error.response });
  }
};

export const editRequestAction = (inputFrom,
  inputTo,
  inputReason,
  inputTravelDate,
  inputReturnDate, tripID) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'PUT',
      url: `${BACKEND_URL}/api/v1/trips/${tripID}`,
      headers: {
        authorization: authHeader,
      },
      data: {
        from: inputFrom,
        to: inputTo,
        reason: inputReason,
        travelDate: inputTravelDate,
        returnDate: inputReturnDate,
      },
    });
    dispatch({ type: EDIT_REQUESTS_SUCCESS, payload: response.data.message });
  } catch (error) {
    error
      ? toast.info('error')
      : null;
    dispatch({ type: EDIT_REQUESTS_ERROR, payload: error.response });
  }
};
