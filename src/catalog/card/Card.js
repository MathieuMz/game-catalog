import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import React from 'react';

import './card.scss';

export default class Card extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    platform: PropTypes.string,
    cover: PropTypes.string
   }

  render() {
    const cardPictureStyle = {
      backgroundImage: `url(${ this.props.cover })`
    };
    const gameLink = `/game/${ this.props.id }`;

    return (
      <div className="card">
        <Link to={gameLink} style={{textDecoration: 'none'}}>
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
