import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../../Card';

describe('Card', () => {
  let wrapper, location, stats

  beforeEach(() => {
    location = 'COLORADO';
    stats = {
      2004: 0.24,
      2005: 0.278,
      2006: 0.337,
      2007: 0.395,
      2008: 0.536,
      2009: 0.598,
      2010: 0.64,
      2011: 0.672,
      2012: 0.695,
      2013: 0.703,
      2014: 0.741
    }
    wrapper = shallow(<Card
      location={location}
      compareCard={jest.fn()}
      removeCompare={jest.fn()}
      stats={stats} />);
  });

  it('Should render given District Data', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('Should be selected on click', () => {
    wrapper.simulate('click');
    expect(wrapper.hasClass('selected'));
  });
  it('Should be able to be unselected', () => {
    wrapper.simulate('click');
    wrapper.simulate('click');
    expect(!wrapper.hasClass('selected'));
  });
});
