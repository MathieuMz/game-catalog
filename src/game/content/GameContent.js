import React from 'react';
import PropTypes from 'prop-types';
import './game-content.scss';

export default class GameContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    platform: PropTypes.string,
    description: PropTypes.string
  };

  render() {
    return (
      <div className="game-content">
        <div className="text">
          <div className="title">
            <h4>{this.props.name}</h4>
            <span>{this.props.platform}</span>
          </div>
          <p className="description">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}
