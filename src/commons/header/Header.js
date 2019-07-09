import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import Logo from '../Logo';
import './header.scss';

class Header extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }


  getTitle() {
    const path = this.props.location.pathname;

    if (path === '/') {
      return 'Games catalog';
    } else if (path.indexOf('/game/') === 0) {
      return `Games ${ path.split('/').pop() } details`;
    } else {
      return '404 page';
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/">
          <Logo />
        </Link>
        <h2>{this.getTitle()}</h2>
      </div>
    );
  }
}

const HeaderWithRouter = withRouter((props) => <Header {...props}/>);
export default HeaderWithRouter;
