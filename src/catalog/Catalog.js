import React from 'react';
import Card from './card/Card';
import Filter from './filter/Filter';
import {games} from '../assets/games.json';
import {platforms} from '../assets/platforms.json';
import './catalog.scss';

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = {
      filter: null
    };
  }

  getGames() {
    return games;
  }

  getPlatforms() {
    return platforms;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleFilterChange(newFilter) {
    this.setState({
      filter: newFilter
    });
  }

  render() {
    return (
      <div className="catalog">
        <Filter
          platforms={this.getPlatforms()}
          onChange={this.handleFilterChange}
          filterValue={this.state.filter}
        />
        <div className="catalog-container">
          {this.getGames().map((game, index) => ({
            ...game,
            id: index
          })).filter((game) => (this.state.filter ? game.platform === this.state.filter : true)).map((game) =>
            <Card
              key={game.id}
              id={game.id}
              name={game.name}
              platform={game.platform}
              cover={game.cover}
            />
          )}
        </div>
      </div>
    );
  }
}
