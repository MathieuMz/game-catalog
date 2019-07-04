import React from "react";
import FilterItem from './filter-item/FilterItem'
import {platforms} from '../../assets/platforms.json';
import "./filter.scss";
import { get } from "https";

export default class Filter extends React.Component {
  getResetItem() {
    if (this.props.filterValue) {
      return (
        <FilterItem
          key={platforms.length}
          label='&#8634;'
          value={null}
          onChange={this.props.onChange}
        />
      );
    }
  }

  render() {
    return (
      <div className="filter">
        {platforms.map((platform, index) => 
          <FilterItem 
            key={index}
            label={platform}
            value={platform}
            onChange={this.props.onChange}
            selected={this.props.filterValue === platform}
          />
        )}
        {this.getResetItem()}
      </div>
    );
  }
}
