import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it, expect } from '@jest/globals';
import SocialSignin from '../src/components/UI/socialSignin/SocialSignin';
import Button from '../src/components/UI/button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Test <SocialSignin />', () => {
  it('should have two <Button />', () => {
    const wrapper = shallow(<SocialSignin />);
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('should contain div ', () => {
    const wrapper = shallow(<SocialSignin />);
    expect(wrapper.contains('div'));
  });
});
