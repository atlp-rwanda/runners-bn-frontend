import moxios from 'moxios';
import axiosInstance from 'axios';
import {
  describe, it, afterEach, beforeEach,
} from '@jest/globals';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createRequestsAction } from '../redux/actions/requestAction';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Creating Trip Requests', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should create a trip request ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          success: true,
          message: 'requests created',
          data: {},
        },
      });
    });
    await store.dispatch(createRequestsAction('test'));
    await flushPromises();
    done();
  });

  it('Should fail creating a role ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: {
          success: false,
          message: 'error',
        },
      });
    });
    await store.dispatch(createRequestsAction('test'));
    await flushPromises();
    done();
  });
});
