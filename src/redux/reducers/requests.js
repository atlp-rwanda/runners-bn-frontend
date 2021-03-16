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
} from '../actions/actionTypes';

const initialState = {
  res: '',
  error: null,
};

export const createRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST_PENDING:
      return { ...state };
    case REGISTER_REQUEST_SUCCESS:
      return { ...state, res: action.payload };
    case REGISTER_REQUEST_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
const initialStateGet = {
  loading: false,
  data: [],
  error: '',
};
export const getRequestReducer = (state = initialStateGet, action) => {
  switch (action.type) {
    case FETCH_REQUEST_LOADING:
      return { ...state, loading: true };

    case FETCHED_REQUEST:
      return { ...state, data: action.payload, loading: false };
    case ERROR_FETCH_REQUEST:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
const initialEditOperatorState = {
  editing: false,
  onSuccess: null,
  onError: null,
};

export const editRequestReducer = (state = initialEditOperatorState, action) => {
  switch (action.type) {
    case EDIT_REQUEST:
      return { ...state, editing: true };
    case EDIT_REQUEST_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case EDIT_REQUEST_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};
