import React from "react";
import "./game-content.scss";

export default class GameContent extends React.Component {
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
