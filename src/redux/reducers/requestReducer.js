import {
  GETTING_REQUESTS_ERROR,
  GETTING_REQUESTS_SUCCESS,
  EDIT_REQUESTS_ERROR,
  EDIT_REQUESTS_SUCCESS,
  CREATE_REQUESTS_ERROR,
  CREATE_REQUESTS_SUCCESS,
} from '../actions/actionTypes';

const initialGetRequestsState = {
  fetching: false,
  fetched: false,
  requests: null,
  onError: null,
};

export const getRequestReducer = (state = initialGetRequestsState, action) => {
  switch (action.type) {
    case GETTING_REQUESTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        requests: action.payload,
      };
    case GETTING_REQUESTS_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialCreateRequestState = {
  creating: false,
  onSuccess: '',
  onError: null,
};

export const createRequestReducer = (state = initialCreateRequestState, action) => {
  switch (action.type) {
    case CREATE_REQUESTS_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case CREATE_REQUESTS_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};

const initialEditRequestState = {
  editing: false,
  onSuccess: null,
  onError: null,
};

export const editRequestReducer = (state = initialEditRequestState, action) => {
  switch (action.type) {
    case EDIT_REQUESTS_SUCCESS:
      return { ...state, onSuccess: action.payload };
    case EDIT_REQUESTS_ERROR:
      return { ...state, onError: action.payload };
    default:
      return state;
  }
};
