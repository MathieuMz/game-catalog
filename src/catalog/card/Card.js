import React from "react";
import "./card.scss";

export default class Card extends React.Component {
  render() {
    const cardPictureStyle = {
      backgroundImage: 'url(' + this.props.cover + ')'
    };

    return (
      <div className="card">
        <div className="card-picture" style={cardPictureStyle} />
        <div className="card-footer">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-footnote">{this.props.platform}</p>
        </div>
      </div>
    );
  }
}
