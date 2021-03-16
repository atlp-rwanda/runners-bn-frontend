/* eslint-disable no-unused-expressions */
import axios from 'axios';
import { toast } from 'react-toastify';
import { token, BACKEND_URL } from '../../../helpers/url';
import {
  REGISTER_REQUEST_PENDING,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAILED,
  FETCH_REQUEST_LOADING,
  FETCHED_REQUEST,
  ERROR_FETCH_REQUEST,
  EDIT_REQUEST_SUCCESS,
  EDIT_REQUEST,
  EDIT_REQUEST_ERROR,
} from '../actionTypes';

export const CreateRequestAction = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST_PENDING });
  try {
    const authHeader = `Bearer ${token}`;
    const res = await axios.post(
      `${BACKEND_URL}/api/trips/new`,
      {
        ...data,
        role: 'requester',
      },
      {
        headers: {
          auth: authHeader,
        },
      },
    );
    dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: res.data.message });
    res.success === true && toast.success('Successfully created request ');
  } catch (error) {
    error.response && toast.info(error.response.data.message);
    dispatch({
      type: REGISTER_REQUEST_FAILED,
      payload: error.response.data.message,
    });
  }
};
export const getAllRequestAction = () => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST_LOADING });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios.get(`${BACKEND_URL}/api/trips`, {
      headers: {
        auth: authHeader,
      },
    });
    dispatch({
      type: FETCHED_REQUEST,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_FETCH_REQUEST,
      payload: error.response.data.message,
    });
  }
};
export const editRequestAction = (
  tripId,
  inputFrom,
  inputTo,
  inputReason,
  inputTravelDate,
  inputReturnDate,
) => async (dispatch) => {
  dispatch({ type: EDIT_REQUEST });
  try {
    const authHeader = `Bearer ${token}`;
    const response = await axios({
      method: 'PUT',
      url: `${BACKEND_URL}/api/trips/${tripId}`,
      headers: {
        auth: authHeader,
      },
      data: {
        from: inputFrom,
        to: inputTo,
        reason: inputReason,
        travelDate: inputTravelDate,
        returnDate: inputReturnDate,
      },
    });
    dispatch({ type: EDIT_REQUEST_SUCCESS, payload: response.data.message });
  } catch (error) {
    error.response.status === 400 && toast.info(error.response.data.message);

    dispatch({ type: EDIT_REQUEST_ERROR, payload: error.response.data.message });
  }
};
