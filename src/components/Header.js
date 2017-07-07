import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notification from "./Notification";
import {logout} from "../actions/auth";
import {FormattedMessage, FormattedDate} from 'react-intl';
import { loadLanguage } from '../actions/lang'
import './Header.scss';
import LanguagesSelect from "./LanguagesSelect";
import favicon from '../../public/favicon.png';

class Header extends React.Component {

  render() {
    const {user, logout, loadLanguage} = this.props;
    // console.log(this.props);

    return (
      <header className="navbar-fixed">
        <nav className="darken-4">
          <div className="container nav-wrapper">
            <NavLink to="/" className="brand-logo left navLogo"><img src={favicon} width="70px" height="70px" alt="LOGO"/></NavLink>

            <ul className="right hide-on-small-only">
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