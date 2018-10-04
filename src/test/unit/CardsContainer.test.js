import React from 'react';
import { shallow, mount } from 'enzyme';
import CardsContainer from '../../CardsContainer';

describe('CardsContainer', () => {
  it('Renders when no cards are given', () => {
    const wrapper = shallow(<CardsContainer stats={[]}/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('Renders cards given to CardsContainer', () => {
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
    const wrapper = shallow(<CardsContainer stats={[card]}/>);
  });

});
