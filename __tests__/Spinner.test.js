import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from '../src/components/UI/spinner/Spinner';

Enzyme.configure({ adapter: new Adapter() });

describe('Test <Button />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });
  it('should contains svg', () => {
    expect(wrapper.contains('svg'));
  });
});
