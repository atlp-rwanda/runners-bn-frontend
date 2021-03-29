// import { describe, it, expect } from '@jest/globals';

// import {
//   authStart, authFail, authSuccess,
// } from '../src/redux/actions/Auth';
// import { AUTH_START, AUTH_FAIL, AUTH_SUCCESS } from '../src/redux/actions/actionTypes';

// describe('Test Signup action', () => {
//   it('should create an action to start Signup', () => {
//     const expectedAction = {
//       type: AUTH_START,
//     };
//     expect(authStart()).toEqual(expectedAction);
//   });
//   it('should create an action for Signup fail', () => {
//     const expectedAction = {
//       type: AUTH_FAIL,
//       error: 'error',
//     };
//     expect(authFail(expectedAction.error)).toEqual(expectedAction);
//   });

//   it('should create an action for Signup success', () => {
//     const expectedAction = {
//       type: AUTH_SUCCESS,
//       authData: {
//         id: 1,
//         token: 'tokenid',
//       },
//     };
//     expect(authSuccess(expectedAction.authData)).toEqual(expectedAction);
//   });
// });

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import * as actions from '../src/redux/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('Fetch Location actions', () => {
  // let store;

  beforeEach(() => {
    moxios.install(axios);
    // store = mockStore({ auth: {} });
  });
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  it('Creates FETCH_DATA_SUCCESS after task is successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        data: {
          user: {
            managerId: 2,
            role: 'requester',
            emailAllowed: true,
            id: 1,
            firstName: 'Umutesi',
            lastName: 'Nadine',
            email: 'christianmucyo@gmail.com',
            password: '$2b$10$EFOY5HPIlq9RGF2kFtQBkeQzbuOCJmj8KWhZ35Cat9AuUx1zZqWSa',
            updatedAt: '2021-03-16T08:08:10.536Z',
            createdAt: '2021-03-16T08:08:10.536Z',
          },
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjaHJpc3RpYW5tdWN5b0BnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJVbXV0ZXNpIiwibGFzdE5hbWUiOiJOYWRpbmUiLCJyb2xlIjoicmVxdWVzdGVyIiwiaWF0IjoxNjE1ODgyMDkwfQ.mCGxw7cRBSjPozXJ79gBOUG56xHf0QdnTBandhkOTF0',
        },
      });
    });

    return store.dispatch(actions.auth()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('AUTH_START');
      expect(expectedActions[1].type).toEqual('AUTH_SUCCESS');
    });
  });
  it('Creates FETCH_DATA_SUCCESS after task is fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          message: 'Internal server Error',
        },
      });
    });

    return store.dispatch(actions.auth()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('AUTH_START');
      expect(expectedActions[1].type).toEqual('AUTH_FAIL');
    });
  });
  it('Creates FETCH_DATA_SUCCESS after task is fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 400,
        message: 'network error',
      });
    });

    return store.dispatch(actions.auth()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('AUTH_START');
      expect(expectedActions[1].type).toEqual('AUTH_FAIL');
    });
  });
  it('Creates FETCH_DATA_SUCCESS after task is fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 403,
        request: 'unauthorized',
      });
    });

    return store.dispatch(actions.auth()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('AUTH_START');
      expect(expectedActions[1].type).toEqual('AUTH_FAIL');
    });
  });
  it('Creates FETCH_DATA_SUCCESS after task is fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        error: 'resource not found',
      });
    });

    return store.dispatch(actions.auth()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual('AUTH_START');
      expect(expectedActions[1].type).toEqual('AUTH_FAIL');
    });
  });
});
