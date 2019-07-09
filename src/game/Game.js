import GameContent from './content/GameContent';
import React from 'react';
import PropTypes from 'prop-types';

import {games} from '../assets/games.json';
import './game.scss';

export default class Game extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getGames() {
    return games;
  }

  render() {
    const game = this.getGames()[this.props.match.params.gameIndex];
    const coverStyle = {
      backgroundImage: `url(${ game.hero })`
    };

    return (
      <div className="game-details">
        <div className="game-cover" style={coverStyle} />
        <GameContent
          name={game.name}
          platform={game.platform}
          description={game.description}
        />
      </div>
    );
  }
}
