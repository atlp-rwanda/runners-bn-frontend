import React from 'react';
import { Switch } from 'react-router-dom';
import { shallow } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import Router from '../routers/Routers';
import App from '../App';

describe('Test <Router />', () => {
  it('should contains Router', () => {
    expect(shallow(<Router />).find(Switch));
  });
  it('should contains Routes', () => {
    expect(shallow(<App />).contains(<Router />));
  });
});
