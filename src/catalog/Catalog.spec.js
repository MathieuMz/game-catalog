import React from 'react';
import {shallow} from 'enzyme';
import Catalog from './Catalog';

describe('Catalog component', () => {
  it('renders correctly', () => {
    global.scrollTo = jest.fn();
    jest.spyOn(Catalog.prototype, 'getGames');
    jest.spyOn(Catalog.prototype, 'getPlatforms');

    const wrapper = shallow(<Catalog />);
    expect(wrapper.exists()).toBe(true);
  });

  it('display two cards when two games defined', () => {
    global.scrollTo = jest.fn();
    jest.spyOn(Catalog.prototype, 'getPlatforms');
    jest.spyOn(Catalog.prototype, 'getGames').mockImplementation(() => [{
        id: 0
      }, {
        id: 1
      }]);

    const wrapper = shallow(<Catalog />);

    expect(wrapper.find('Card').length).toEqual(2);
  });

  it('display game card well', () => {
    global.scrollTo = jest.fn();
    jest.spyOn(Catalog.prototype, 'getPlatforms');
    jest.spyOn(Catalog.prototype, 'getGames').mockImplementation(() => [{
        id: 0,
        name: 'game0',
        platform: 'P0',
        cover: 'cover'
      }]);

    const wrapper = shallow(<Catalog />);

    expect(wrapper.find('Card').prop('name')).toEqual('game0');
    expect(wrapper.find('Card').prop('platform')).toEqual('P0');
    expect(wrapper.find('Card').prop('cover')).toEqual('cover');
  });

  it('filter works and display games as expected', () => {
    global.scrollTo = jest.fn();
    jest.spyOn(Catalog.prototype, 'getPlatforms');
    jest.spyOn(Catalog.prototype, 'getGames').mockImplementation(() => [{
        id: 0,
        platform: 'P0'
      }, {
        id: 1,
        platform: 'P1'
      }]);

    const wrapper = shallow(<Catalog />);

    wrapper.instance().handleFilterChange('P0');
    expect(wrapper.find('Card').length).toEqual(1);

    wrapper.instance().handleFilterChange(null);
    expect(wrapper.find('Card').length).toEqual(2);

    wrapper.instance().handleFilterChange('P2');
    expect(wrapper.find('Card').length).toEqual(0);
  });
});
