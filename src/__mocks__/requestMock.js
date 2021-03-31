import { rest } from 'msw';
import { BACKEND_URL } from '../helpers/url';

const handlers = [
  rest.get(`${BACKEND_URL}/api/trips`, (req, res, context) => res(
    context.status(200),
    context.json({
      success: true,
      message: 'Successfully found all your trips',
      data: [
        {
          id: 2,
          from: 2,
          to: 4,
          reason: 'traveling',
          travelDate: '2021-04-03T00:00:00.000Z',
          returnDate: '2021-04-13T00:00:00.000Z',
        },
      ],
    }),
  )),
  rest.post(`${BACKEND_URL}/api/trips/new`, (req, res, context) => res(
    context.status(201),
    context.json({
      success: true,
      message: 'You successfully created a trip',
      data: [{
        from: 3,
        to: 4,
        reason: 'camping',
        travelDate: '2021-06-05T00:00:00.000Z',
        returnDate: '2021-06-25T00:00:00.000Z',
      }],
    }),
  )),
];
export { handlers, rest };
