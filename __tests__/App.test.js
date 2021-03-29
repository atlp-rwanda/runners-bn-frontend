import React from 'react';
import { shallow } from 'enzyme';
import { describe, it } from '@jest/globals';
import App from '../src/App';

describe('App test', () => {
  it('should renders App components without crashing', () => {
    shallow(<App />);
  });
});
