import moxios from 'moxios';
import axiosInstance from 'axios';
import {
  describe, it, afterEach, beforeEach, expect,
} from '@jest/globals';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  EDIT_REQUESTS_SUCCESS,
} from '../redux/actions/actionTypes';
import { editRequestAction } from '../redux/actions/requestAction';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Editing Trip Request', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should Edit a trip request ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'Successfully updated the trip',
        },
      });
    });
    await store.dispatch(editRequestAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(EDIT_REQUESTS_SUCCESS);
    done();
  });

  it('Should fail editing a role ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: false,
          message: 'error',
        },
      });
    });
    await store.dispatch(editRequestAction());
    await flushPromises();
    done();
  });
});
