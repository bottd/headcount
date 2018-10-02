import React from 'react';
import { shallow, mount } from 'enzyme';
import CardsContainer from '../../CardsContainer';

describe('App', () => {
  it('Renders with one Search, CompareContainer, & CardsContainer', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot()
  });
});
