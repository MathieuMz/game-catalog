import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Game from "./game/Game"
import Catalog from "./catalog/Catalog"
import Header from "./commons/header/Header"
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' component={Catalog} />
            <Route path="/game/:gameIndex" component={Game} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render (<App />, document.getElementById('app'));
