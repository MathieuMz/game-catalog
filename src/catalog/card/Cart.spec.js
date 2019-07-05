import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

// https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Card />);
  });
});