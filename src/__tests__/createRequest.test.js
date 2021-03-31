import React from 'react';
import { setupServer } from 'msw/node';
import { fireEvent } from '@testing-library/react';
import {
  describe, it, expect, beforeAll, afterAll, afterEach,
} from '@jest/globals';
import AddRequest from '../components/Requests/createRequest';
import RenderWithRedux from '../shared/renderWithRedux';
import { handlers, rest } from '../__mocks__/requestMock';
import { BACKEND_URL } from '../helpers/url';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Adding A Role', () => {
  it('It should render the add request modal', async () => {
    const { getByText, getByTestId } = RenderWithRedux(<AddRequest />);
    fireEvent.click(getByText('+'));
    expect(getByText('Create Trip Request')).toBeInTheDocument();
    expect(getByTestId('form')).toBeInTheDocument();
  });
  it('it should display success message after trip request creation', async () => {
    const { getByText, getByTestId } = RenderWithRedux(<AddRequest />);
    fireEvent.click(getByText('+'));
    const from = getByTestId('from');
    const to = getByTestId('to');
    const reason = getByTestId('reason');
    const travelDate = getByTestId('travelDate');
    const returnDate = getByTestId('returnDate');
    fireEvent.change(from, {
      target: {
        value: 3,
      },
    });
    fireEvent.change(to, {
      target: {
        value: 5,
      },
    });
    fireEvent.change(reason, {
      target: {
        value: 'testreason',
      },
    });
    fireEvent.change(travelDate, {
      target: {
        value: '2021-08-05',
      },
    });
    fireEvent.change(returnDate, {
      target: {
        value: '2021-08-25',
      },
    });
    fireEvent.submit(getByTestId('form'));
  });
  it('it should display an error message when the input request already exists', async () => {
    server.use(
      rest.post(`${BACKEND_URL}/api/trips/new`, (req, res, context) => res(context.status(400))),
    );
    const { getByText, getByTestId } = RenderWithRedux(<AddRequest />);
    fireEvent.click(getByText('+'));
    const from = getByTestId('from');
    const to = getByTestId('to');
    const reason = getByTestId('reason');
    const travelDate = getByTestId('travelDate');
    const returnDate = getByTestId('returnDate');
    fireEvent.change(from, {
      target: {
        value: 2,
      },
    });
    fireEvent.change(to, {
      target: {
        value: 3,
      },
    });
    fireEvent.change(reason, {
      target: {
        value: 'Camping',
      },
    });
    fireEvent.change(travelDate, {
      target: {
        value: '2021-06-09',
      },
    });
    fireEvent.change(returnDate, {
      target: {
        value: '2021-06-19',
      },
    });
    fireEvent.submit(getByTestId('form'));
  });
});
