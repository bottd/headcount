import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../App';

describe('App', () => {
  it('Renders with one Search, CompareContainer, & CardsContainer', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('Should filter stats', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().filterCards('poudre');
    expect(wrapper.state().stats.length).toBe(1);
  });

  it('Should add cards to compare in state', () => {
    const wrapper = shallow(<App/>);
    const card = {location: 'location', stats: {}};
    wrapper.instance().compareCard(card);
    expect(wrapper.state().compare.length).toBe(1);
  });

  it('Should only hold 2 cards in compare at a time', () => {
    const wrapper = shallow(<App/>);
    const card = {location: 'location', stats: {}};
    wrapper.instance().compareCard(card);
    wrapper.instance().compareCard(card);
    wrapper.instance().compareCard(card);
    expect(wrapper.state().compare.length).toBe(2);
  });

  it('Should remove cards from compare in state', () => {
    const wrapper = shallow(<App/>);
    const card = {location: 'location', stats: {}};
    wrapper.instance().compareCard(card);
    wrapper.instance().removeCompare('location');

    expect(wrapper.state().compare.length).toBe(0);
  });

});
