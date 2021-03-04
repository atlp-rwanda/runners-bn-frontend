import React from 'react';
import { shallow } from 'enzyme';
import { describe, it } from '@jest/globals';
import Home from '../components/Home';

describe('Simple component test', () => {
  it('should renders Home components', () => {
    shallow(<Home />);
  });
});
