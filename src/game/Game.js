import React from "react";
import GameContent from './content/GameContent'

import {games} from '../assets/games.json';
import "./game.scss";

export default class Game extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const game = games[this.props.match.params.gameIndex];
    const coverStyle = {
      backgroundImage: 'url(' + game.hero + ')'
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
