import React from "react";
import "./card.scss";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-picture"></div>
        <div className="card-footer">
          <h4 className="card-title"></h4>
          <p className="card-footnote"></p>
        </div>
      </div>
    );
  }
}
