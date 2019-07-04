import React from "react";
import "./filter-item.scss";

export default class FilterItem extends React.Component {
  render() {
    return (
      <div 
        className={"filter-item " + (this.props.selected ? 'selected': '')}
        onClick={() => this.props.onChange(this.props.value)}
      >
        {this.props.label}
      </div>
    );
  }
}
