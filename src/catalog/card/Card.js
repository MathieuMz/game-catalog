import React from "react";
import { Link } from 'react-router-dom'

import "./card.scss";

export default class Card extends React.Component {
  render() {
    const cardPictureStyle = {
      backgroundImage: 'url(' + this.props.cover + ')'
    };
    const gameLink = '/game/' + this.props.id;

    return (
      <div className="card">
        <Link to={gameLink}>
          <div className="card-picture" style={cardPictureStyle} />
          <div className="card-footer">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-footnote">{this.props.platform}</p>
          </div>
        </Link>
      </div>
    );
  }
}
