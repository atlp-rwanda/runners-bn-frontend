import React from 'react';
import {
  describe, it, expect, beforeAll, afterAll, afterEach,
} from '@jest/globals';
// import { waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import GetRequests from '../components/Requests/Requests';
import RenderWithRedux from '../shared/renderWithRedux';
import { handlers } from '../__mocks__/requestMock';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Requests', () => {
  it('It should render the get requests table', async () => {
    const { getByTestId } = RenderWithRedux(<GetRequests />);
    expect(getByTestId('table')).toBeInTheDocument();
  });
  // it('It should render the requests data from the API', async () => {
  //   const { getByTestId } = RenderWithRedux(<GetRequests />);
  //   await waitFor(() => {
  //     expect(getByTestId('requests-data')).toBeInTheDocument();
  //   });
  // });
});
