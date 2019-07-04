import React from "react";
import Logo from '../Logo';
import "./header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <h2>Test de titre</h2>
      </div>
    );
  }
}
