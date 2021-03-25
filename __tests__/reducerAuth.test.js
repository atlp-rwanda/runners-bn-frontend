import reducer from '../src/redux/reducers/Auth';
import initialState from '../src/redux/store/initialState';
import { authStart, authFail, authSuccess } from '../src/redux/actions/Auth';
import { auth } from '../src/redux/actions/index';

describe('auth Reducers', () => {
  it('should return initialState when there is no action', () => {
    const res = reducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state when AUTH_SUCCESS', () => {
    expect(
      reducer(
        {
          error: null,
          loading: false,
          message: null,
          token: null,
          userId: null,
        },
        authSuccess({
          message: 'message',
        }),
      ),
    ).toEqual({
      error: null,
      loading: false,
      token: undefined,
      userId: undefined,
      message: 'message',
    });
  });

  it('should return an updated state when AUTH_FAIL', () => {
    expect(
      reducer(
        {
          error: null,
          loading: false,
          message: null,
          token: null,
          userId: null,
        },
        authFail('error'),
      ),
    ).toEqual({
      error: 'error',
      loading: false,
      message: null,
      token: null,
      userId: null,
    });
  });

  it('should return an updated state when AUTH_FAIL', () => {
    expect(
      reducer(
        {
          error: null,
          loading: false,
          message: null,
          token: null,
          userId: null,
        },
        authStart(),
      ),
    ).toEqual({
      error: null,
      loading: true,
      message: null,
      token: null,
      userId: null,
    });
  });

  it('should be defined ', async () => {
    expect(auth('cele', 'kaga', 'kaa@gmail.com', 'password123')).toBeTruthy();
  });
});
