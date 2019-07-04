import React from "react";
import ReactDOM from "react-dom"
import Catalog from "./catalog/Catalog"
import Header from "./commons/header/Header"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Catalog />
      </div>
    );
  }
}

ReactDOM.render (<App />, document.getElementById('app'));
