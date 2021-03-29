import React from 'react';
import { shallow } from 'enzyme';
import { describe, it } from '@jest/globals';
import NavBar from '../src/components/NavBar';

describe('Simple component test', () => {
  it('should renders Navbar components', () => {
    shallow(<NavBar />);
  });
});
