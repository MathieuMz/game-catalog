import React from 'react';
import {shallow} from 'enzyme';
import FilterItem from './FilterItem';

describe('Filter item component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FilterItem/>);

    expect(wrapper.exists()).toBe(true);
  });

  it('label as text of component', () => {
    const wrapper = shallow(<FilterItem label='label' />);

    expect(wrapper.text()).toEqual('label');
  });

  it('selected class is selected property is true', () => {
    const wrapper = shallow(<FilterItem selected={true} />);

    expect(wrapper.hasClass('selected')).toBe(true);
  });


  it('onclick prop function called when filteritem clicked', () => {
    const onChangeFct = jest.fn();
    const wrapper = shallow(<FilterItem onChange={onChangeFct} value='value'/>);

    wrapper.simulate('click');

    expect(onChangeFct).toHaveBeenCalledWith('value');
  });

});
