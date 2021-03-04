import React from 'react';
import { shallow } from 'enzyme';
import {
  describe, it, expect,
} from '@jest/globals';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

describe('error boundary', () => {
  it('renders an error', () => {
    const wrapper = shallow(<ErrorBoundary />);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidCatch('Oops', 'Oh no');
    expect(wrapper.state('errorInfo')).toEqual('Oh no');
  });
});
