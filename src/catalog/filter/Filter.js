import React from "react";
import FilterItem from './filter-item/FilterItem'
import {platforms} from '../../assets/platforms.json';
import "./filter.scss";

export default class Filter extends React.Component {

  render() {
    return (
      <div className="filter">
        <FilterItem
          key={platforms.length}
          label='All'
          value={null}
          onChange={this.props.onChange}
          selected={!this.props.filterValue}
        />
        {platforms.map((platform, index) => 
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
