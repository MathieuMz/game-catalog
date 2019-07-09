import React from 'react';
import {shallow} from 'enzyme';
import GameContent from './GameContent';

describe('Game content component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GameContent />);

    expect(wrapper.exists()).toBe(true);
  });

  it('game content title is ok', () => {
    const wrapper = shallow(<GameContent name="Game4" />);

    expect(wrapper.find('.title h4').text()).toEqual('Game4');
  });

  it('game content platform is ok', () => {
    const wrapper = shallow(<GameContent platform="Pl1" />);

    expect(wrapper.find('.title span').text()).toEqual('Pl1');
  });

  it('game content description is ok', () => {
    const wrapper = shallow(<GameContent description="Desc" />);

    expect(wrapper.find('.description').text()).toEqual('Desc');
  });
});
