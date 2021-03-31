import React from 'react';
import {
  fireEvent,
} from '@testing-library/react';
import {
  describe, it, expect, beforeAll, afterAll, afterEach,
} from '@jest/globals';
import { setupServer } from 'msw/node';
import EditRequest from '../components/Requests/editRequest';
import RenderWithRedux from '../shared/renderWithRedux';
import { handlers } from '../__mocks__/requestMock';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Editing A Trip Request', () => {
  const props = {
    from: 1,
    to: 2,
    reason: 'shopping',
    travelDate: '2021-06-05',
    returnDate: '2021-06-25',
    tripId: 2,
  };
  it('It should render the Edit request modal', async () => {
    const { getByText, getByTestId } = RenderWithRedux(
      <EditRequest
        from={props.from}
        to={props.to}
        reason={props.reason}
        travelDate={props.travelDate}
        returnDate={props.returnDate}
        tripId={props.tripId}
      />,
    );
    fireEvent.click(getByText('Edit'));
    expect(getByText('edit')).toBeInTheDocument();
    expect(getByTestId('form')).toBeInTheDocument();
  });
  it('it should display success message on editing a request', async () => {
    const { getByText, getByTestId } = RenderWithRedux(
      <EditRequest
        from={props.from}
        to={props.to}
        reason={props.reason}
        travelDate={props.travelDate}
        returnDate={props.returnDate}
        tripId={props.tripId}
      />,
    );
    fireEvent.click(getByText('Edit'));
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
        value: 4,
      },
    });
    fireEvent.change(reason, {
      target: {
        value: 'testreason',
      },
    });
    fireEvent.change(travelDate, {
      target: {
        value: '2021-07-05',
      },
    });
    fireEvent.change(returnDate, {
      target: {
        value: '2021-07-25',
      },
    });
    fireEvent.submit(getByTestId('form'));
  });
});
