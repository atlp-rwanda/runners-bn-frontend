import { shallow } from 'enzyme';
import React from 'react';
import {
  render, cleanup, screen, act, fireEvent, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';

import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import store from '../src/redux/store/index';
import Signup from '../src/components/signup';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Signup Rendering', () => {
  beforeEach(async () => {
    await act(async () => render(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>,
    ));
    act(() => {
      jest.useFakeTimers();
      jest.advanceTimersByTime(3000);
    });
  });

  afterEach(cleanup);
  it('should renders signup components', () => {
    shallow(<Provider store={store}><Signup /></Provider>);
  });
  it('should contains form', () => {
    expect(screen.queryByTestId('form')).toBeTruthy();
  });
  it('should handle continue with google', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Google/i }));
    expect(screen.getAllByRole('button', { name: /Google/i })).toHaveLength(1);
  });
  it('should handle continue with facebook', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Facebook/i }));
    expect(screen.getAllByRole('button', { name: /Facebook/i })).toHaveLength(1);
  });
  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
  });
  it('should display matching error when email is invalid', async () => {
    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: {
        value: 'test',
      },
    });

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/First/i), {
      target: {
        value: 'Mucyo',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/Last/i), {
      target: {
        value: 'Aime',
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/Confirm/i), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1));
    expect(screen.getByPlaceholderText('E-mail').value).toBe('test');
    expect(screen.getByPlaceholderText('Password').value).toBe('password');
    expect(screen.getByPlaceholderText(/Last/i).value).toBe('Aime');
    expect(screen.getByPlaceholderText(/First/i).value).toBe('Mucyo');
    expect(screen.getByPlaceholderText(/Confirm/i).value).toBe('password');
  });
  it('should display matching error when password is invalid', async () => {
    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: {
        value: 'test@gmail.com',
      },
    });

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: 'pass',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/First/i), {
      target: {
        value: 'Mucyo',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/Last/i), {
      target: {
        value: 'Aime',
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/Confirm/i), {
      target: {
        value: 'pass',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1));
    expect(screen.getByPlaceholderText('E-mail').value).toBe('test@gmail.com');
    expect(screen.getByPlaceholderText('Password').value).toBe('pass');
    expect(screen.getByPlaceholderText(/Last/i).value).toBe('Aime');
    expect(screen.getByPlaceholderText(/First/i).value).toBe('Mucyo');
    expect(screen.getByPlaceholderText(/Confirm/i).value).toBe('pass');
  });

  it('should display password mismatch', async () => {
    fireEvent.input(screen.getByTestId('email'), {
      target: {
        value: 'test1@gmail.com',
      },
    });

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/First/i), {
      target: {
        value: 'Aime',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/Last/i), {
      target: {
        value: 'Mucyo',
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/Confirm/i), {
      target: {
        value: 'passwords',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1));
    expect(screen.getByTestId('email').value).toBe('test1@gmail.com');
    expect(screen.getByPlaceholderText('Password').value).toBe('password');
    expect(screen.getByPlaceholderText(/Last/i).value).toBe('Mucyo');
    expect(screen.getByPlaceholderText(/First/i).value).toBe('Aime');
    expect(screen.getByPlaceholderText(/Confirm/i).value).toBe('passwords');
  });
  it('should signup successfully', async () => {
    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: {
        value: 'test@gmail.com',
      },
    });

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/First/i), {
      target: {
        value: 'Aime',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/Last/i), {
      target: {
        value: 'Mucyo',
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/Confirm/i), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1));
    expect(screen.getByPlaceholderText('E-mail').value).toBe('');
    expect(screen.getByPlaceholderText('Password').value).toBe('');
    expect(screen.getByPlaceholderText(/Last/i).value).toBe('');
    expect(screen.getByPlaceholderText(/First/i).value).toBe('');
    expect(screen.getByPlaceholderText(/Confirm/i).value).toBe('');
    expect(screen.getByPlaceholderText('E-mail').value).toBe('');
  });
});

describe(' <Signup />', () => {
  let wrapper;
  let storeState;
  it('It should render the signup component', () => {
    storeState = mockStore({
      state: {
        auth: {
          token: '1234567890987654567890fvgbhnjmk,lmjhgf',
          userId: '1',
          error: null,
          loading: false,
          message: 'User created',
        },
      },
    });
    wrapper = shallow(<Provider store={storeState}><Signup /></Provider>);
    const component = toJson(wrapper);
    expect(component).toMatchSnapshot();
  });
});
