import React from 'react';
import PropTypes from 'prop-types';
import './filter-item.scss';

export default class FilterItem extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    selected: PropTypes.bool
  }

  render() {
    return (
      <div
        className={`filter-item ${ this.props.selected ? 'selected' : '' }`}
        onClick={() => this.props.onChange(this.props.value)}
      >
        {this.props.label}
      </div>
    );
  }
}
