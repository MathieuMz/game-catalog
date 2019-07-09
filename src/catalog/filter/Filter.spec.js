import React from 'react';
import {shallow} from 'enzyme';
import Filter from './Filter';

describe('Platform filter component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Filter platforms={[]}/>);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders 3 filters if 2 platforms', () => {
    const platforms = ['P1', 'P2'];
    const wrapper = shallow(<Filter platforms={platforms} />);

    expect(wrapper.find('FilterItem').length).toEqual(3);
  });

  it('first filteritem is selected if no filtervalue', () => {
    const platforms = ['P1', 'P2'];
    const wrapper = shallow(<Filter platforms={platforms} />);

    expect(wrapper.find('FilterItem').first().prop('selected')).toBe(true);
    expect(wrapper.find('FilterItem').last().prop('selected')).toBe(false);
  });

  it('filteritem is selected if filtervalue defined', () => {
    const platforms = ['P1', 'P2'];
    const selectedPlatformIndex = 1;
    const wrapper = shallow(<Filter platforms={platforms} filterValue={platforms[selectedPlatformIndex]} />);

    expect(wrapper.find('FilterItem').first().prop('selected')).toBe(false);
    expect(wrapper.find('FilterItem').at(selectedPlatformIndex + 1).prop('selected')).toBe(true);
  });
});
