import React from 'react';
import {shallow} from 'enzyme';
import Game from './Game';

describe('Game component', () => {
  it('renders correctly', () => {
    global.scrollTo = jest.fn();
    jest.spyOn(Game.prototype, 'getGames').mockImplementation(() => [{
        hero: 'link'
      }]);

    const wrapper = shallow(<Game
      match={{params: {gameIndex: 0}, isExact: true, path: '', url: ''}}
    />);
    expect(wrapper.exists()).toBe(true);
  });

  it('name platform and description game are ok', () => {
    global.scrollTo = jest.fn();
    jest.spyOn(Game.prototype, 'getGames').mockImplementation(() => [{
        hero: 'link',
        name: 'Game 0',
        platform: 'Platform 0',
        description: 'Game 0 descr.',
      }]);

    const wrapper = shallow(<Game
      match={{params: {gameIndex: 0}, isExact: true, path: '', url: ''}}
    />);

    expect(wrapper.find('GameContent').prop('name')).toBe('Game 0');
    expect(wrapper.find('GameContent').prop('platform')).toBe('Platform 0');
    expect(wrapper.find('GameContent').prop('description')).toBe('Game 0 descr.');
  });
});
