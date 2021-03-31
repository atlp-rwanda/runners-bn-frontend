import moxios from 'moxios';
import axiosInstance from 'axios';
import {
  describe, it, afterEach, beforeEach,
} from '@jest/globals';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { GETTING_REQUESTS_ERROR } from '../redux/actions/actionTypes';
import { getRequestsAction } from '../redux/actions/requestAction';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Getting Trip Requests', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should get all the trips action ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      const testRole = {
        id: 8,
        from: 5,
        to: 3,
        reason: 'test',
        travelDate: '2021-04-03',
        returnDate: '2021-04-13',
      };
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: '',
          data: testRole,
        },
      });
    });
    await store.dispatch(getRequestsAction());
    await flushPromises();
    done();
  });

//   it('Should fail Getting requests action ', async (done) => {
//     moxios.wait(async () => {
//       const request = moxios.requests.mostRecent();
//       request.reject({
//         status: 500,
//         response: {
//           success: false,
//           message: 'error',
//           data: {},
//         },
//       });
//     });
//     await store.dispatch(getRequestsAction());
//     await flushPromises();
//     const calledActions = store.getActions();
//     expect(calledActions[1].type).toEqual(GETTING_REQUESTS_ERROR);
//     done();
//   });
});

// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import {
//   describe, it, afterEach, beforeEach, expect,
// } from '@jest/globals';
// import moxios from 'moxios';
// import axios from 'axios';
// import * as actions from '../redux/actions/requestAction';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// const store = mockStore({});

// describe('Fetch Requests actions', () => {
//   beforeEach(() => {
//     moxios.install(axios);
//   });
//   afterEach(() => {
//     moxios.uninstall();
//     store.clearActions();
//   });
//   it('Creates FETCH_DATA_SUCCESS after task is successful', () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         data: [
//           {
//             id: 3,
//             userId: 1,
//             managerId: 2,
//             from: 1,
//             to: 2,
//             reason: 'traveling',
//             travelDate: '2021-06-05T00:00:00.000Z',
//             returnDate: '2021-06-25T00:00:00.000Z',
//             status: 'pending',
//             createdAt: '2021-03-18T09:25:35.588Z',
//             updatedAt: '2021-03-18T09:28:09.955Z',
//             requester: {
//               firstName: 'John',
//               lastName: 'requester',
//               email: 'andelarunners@gmail.com',
//             },
//             manager: {
//               firstName: 'Jane',
//               lastName: 'manager',
//               email: 'barefootmanager@runners.com',
//             },
//             departure: {
//               name: 'Kigali',
//             },
//             destination: {
//               name: 'NewYork',
//             },
//           },
//         ],
//       });
//     });

//     return store.dispatch(actions.getRequestsAction()).then(() => {
//       const expectedActions = store.getActions();
//       expect(expectedActions[1].type).toEqual('GETTING_REQUESTS_SUCCESS');
//     });
//   });

//   it('Creates GETTING_REQUESTS_ERROR after task is fail', () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 500,
//         response: {
//           message: 'Internal server Error',
//         },
//       });
//     });

//     return store.dispatch(actions.getRequestsAction()).then(() => {
//       const expectedActions = store.getActions();
//       expect(expectedActions[1].type).toEqual('GETTING_REQUESTS_ERROR');
//     });
//   });
// });
