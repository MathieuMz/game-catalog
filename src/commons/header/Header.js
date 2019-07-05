import React from "react";
import { Link } from 'react-router-dom'

import Logo from '../Logo';
import "./header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <Logo />
        </Link>
        <h2>Test de titre</h2>
      </div>
    );
  }
}
