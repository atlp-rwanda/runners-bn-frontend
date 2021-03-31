import {
  describe, it, expect,
} from '@jest/globals';
import {
  getRequestReducer,
  editRequestReducer,
  createRequestReducer,
} from '../redux/reducers/requestReducer';
import {
  GETTING_REQUESTS_ERROR,
  GETTING_REQUESTS_SUCCESS,
  EDIT_REQUESTS_ERROR,
  EDIT_REQUESTS_SUCCESS,
  CREATE_REQUESTS_ERROR,
  CREATE_REQUESTS_SUCCESS,
} from '../redux/actions/actionTypes';

describe('Testing request reducer', () => {
  const initialGetRequestsState = {
    fetching: false,
    fetched: false,
    requests: null,
    onError: null,
  };

  const initialCreateRequestState = {
    creating: false,
    onSuccess: '',
    onError: null,
  };

  const initialEditRequestState = {
    editing: false,
    onSuccess: null,
    onError: null,
  };

  it('Should test success get requests reducer', () => {
    expect(
      getRequestReducer(initialGetRequestsState, {
        type: GETTING_REQUESTS_SUCCESS,
        payload: 'test',
      }),
    ).toEqual({ ...initialGetRequestsState, fetched: true, requests: 'test' });
  });

  it('Should test failure get requests reducer', () => {
    expect(
      getRequestReducer(initialGetRequestsState, {
        type: GETTING_REQUESTS_ERROR,
        payload: 'error',
      }),
    ).toEqual({ ...initialGetRequestsState, onError: 'error' });
  });
  it('Should test create request success reducer', () => {
    expect(
      createRequestReducer(initialCreateRequestState, {
        type: CREATE_REQUESTS_SUCCESS,
        payload: 'success',
      }),
    ).toEqual({ ...initialCreateRequestState, onSuccess: 'success' });
  });
  it('Should test create role failure reducer', () => {
    expect(
      createRequestReducer(initialCreateRequestState, {
        type: CREATE_REQUESTS_ERROR,
        payload: 'error',
      }),
    ).toEqual({ ...initialCreateRequestState, onError: 'error' });
  });
  it('Should test edit role success reducer', () => {
    expect(
      editRequestReducer(initialEditRequestState, {
        type: EDIT_REQUESTS_SUCCESS,
        payload: 'success',
      }),
    ).toEqual({ ...initialEditRequestState, onSuccess: 'success' });
  });
  it('Should test edit role failure reducer', () => {
    expect(
      editRequestReducer(initialEditRequestState, {
        type: EDIT_REQUESTS_ERROR,
        payload: 'error',
      }),
    ).toEqual({ ...initialEditRequestState, onError: 'error' });
  });
});
