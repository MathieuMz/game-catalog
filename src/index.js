import React from "react";
import ReactDOM from "react-dom"
import Catalog from "./catalog/Catalog"
import Header from "./commons/header/Header"
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Catalog />
      </div>
    );
  }
}

ReactDOM.render (<App />, document.getElementById('app'));
