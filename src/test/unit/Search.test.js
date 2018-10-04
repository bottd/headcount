import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../../Search';

describe('Search', () => {
  it('Renders with one text input and 1 button', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('Should have a state for the search value', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper.state().search).toBe('');
  });

  it('Should update state onChange', () => {
    const wrapper = shallow(<Search/>);
    const mockEvent = { target: { value: 'Colorado'}};
    wrapper.instance().updateValue(mockEvent);
    expect(wrapper.state().search).toBe('Colorado');
  });

  it('Should call filterCards onSubmit', () => {
    const filterCards = jest.fn();
    const wrapper = shallow(<Search filterCards={filterCards}/>);
    const mockEvent = {preventDefault(){}};
    wrapper.instance().handleSubmit(mockEvent);
    expect(filterCards.mock.calls.length).toBe(1);
  });

});
