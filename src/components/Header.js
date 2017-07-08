import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notification from "./Notification";
import {logout} from "../actions/auth";
import {FormattedMessage, FormattedDate} from 'react-intl';
import './Header.scss';
import LanguagesSelect from "./LanguagesSelect";
import favicon from '../../public/favicon.png';
class Header extends React.Component {

  componentDidMount() {
    $(".button-collapse").sideNav(
      {
        edge: 'right', // Choose the horizontal origin
        menuWidth: 240
      }
    );

  }

  render() {
    const {user, logout} = this.props;
    // console.log(this.props);

    return (
      <header className="navbar-fixed">
        <nav className="darken-4">
          <div className="container nav-wrapper">
            <NavLink to="/" className="brand-logo left navLogo"><img src={favicon} width="70px" height="70px" alt="LOGO"/></NavLink>
            <a style={{cursor: 'pointer'}} data-activates="mobile-menu" className="right button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <Notification />
              {!user && <li><NavLink to="/login"><FormattedMessage id="app.header.login"/></NavLink></li>}
              {!user && <li><NavLink to="/signup"><FormattedMessage id="app.header.signup"/></NavLink></li>}
              <li><NavLink to="/plans"><FormattedMessage id="app.header.plans" /></NavLink></li>
              {user &&
              <li>
                <NavLink to="/dashboard">
                  <img id="profilePhoto"  src={user.photoURL} />
                </NavLink>
              </li>}
              {user && <li><span style={{color:"gray"}}><FormattedMessage id="app.header.hi" /></span>  <strong id="userName"> {user.name}</strong></li>}
              {user && <li><a className="btn logoutButton" onClick={logout} style={{cursor: 'pointer'}}><FormattedMessage id="app.dashboardSB.logout" /></a></li>}
              <li> <LanguagesSelect /> </li>
            </ul>
            <ul className="side-nav" id="mobile-menu">
              {!user && <li><NavLink to="/login"><FormattedMessage id="app.header.login"/></NavLink></li>}
              {!user && <li><NavLink to="/signup"><FormattedMessage id="app.header.signup"/></NavLink></li>}
              <li><NavLink to="/plans"><FormattedMessage id="app.header.plans" /></NavLink></li>
              {user &&
              <li>
                <NavLink to="/dashboard">
                  <img id="profilePhoto"  src={user.photoURL} />
                </NavLink>
              </li>}
              {user && <li><a>{user.name}</a></li>}
              {user && <li><a onClick={logout} style={{cursor: 'pointer'}}><FormattedMessage id="app.dashboardSB.logout" /></a></li>}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object
};

export default connect(
  ({auth, lang}) => ({ user: auth.user, language: lang.language }),
  { logout }
) (Header);