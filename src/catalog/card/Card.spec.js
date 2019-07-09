import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

describe('Game card component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.exists()).toBe(true);
  });

  it('link to game page', () => {
    const wrapper = shallow(<Card id={4} />);

    expect(wrapper.find('Link').prop('to')).toEqual('/game/4');
  });

  it('card title is ok', () => {
    const wrapper = shallow(<Card name="Game4" />);

    expect(wrapper.find('.card-title').text()).toEqual('Game4');
  });
});
