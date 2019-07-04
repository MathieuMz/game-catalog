import React from "react";
import ReactDOM from "react-dom"

class Welcome extends React.Component {
  render() {
    return (
      <h2>
        Hello React world !
      </h2>
    );
  }
}

ReactDOM.render (<Welcome />, document.getElementById('app'));
