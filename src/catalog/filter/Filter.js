import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './item/FilterItem';

import './filter.scss';

export default class Filter extends React.Component {
 static propTypes = {
    platforms: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    filterValue: PropTypes.string
  }

  render() {
    return (
      <div className="filter">
        <FilterItem
          key={this.props.platforms.length}
          label='All'
          value={null}
          onChange={this.props.onChange}
          selected={!this.props.filterValue}
        />
        {this.props.platforms.map((platform, index) =>
          <FilterItem
            key={index}
            label={platform}
            value={platform}
            onChange={this.props.onChange}
            selected={this.props.filterValue === platform}
          />
        )}
      </div>
    );
  }
}
