import React from 'react';
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';
import { describe, it, expect } from '@jest/globals';
import PageNotFound from '../src/components/PageNotFound';

describe('rendering components', () => {
  it('renders pageNotFound components without crashing', () => {
    shallow(<PageNotFound />);
  });
  it('renders pageNotFound title components without crashing', () => {
    const wrapper = shallow(<PageNotFound />);
    const title = (
      <Typography variant="h5">
        We are sorry. The page that you requested for could not be found.
        Please go back to the home page ot contact us at runners@gmail.com
      </Typography>
    );
    expect(wrapper.contains(title)).toEqual(true);
  });
});
