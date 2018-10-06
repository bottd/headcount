import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareContainer from '../../CompareContainer';

describe('CompareContainer', () => {

  it('Renders cards given to CompareContainer', () => {
    const mockAverages = jest.fn(() => ({location1: 0.25, location2: 0.25, compared: 1 }));
    const card = {
      location: 'COLORADO',
      stats: {
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
    }
    const wrapper = shallow(<CompareContainer stats={[card]} compareDistrictAverages={mockAverages}/>);
    expect(wrapper.toMatchSnapshot);
  });

});
