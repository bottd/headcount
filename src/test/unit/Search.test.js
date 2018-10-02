import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../../Search';

describe('Search', () => {
  it('Renders with one text input and 1 button', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper).toMatchSnapshot()
  });
});
