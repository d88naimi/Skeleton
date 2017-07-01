import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Userbox} from "./Userbox";
import {logout} from "../actions/auth";
import {FormattedMessage, FormattedDate} from 'react-intl';
import { loadLanguage } from '../actions/lang'
import './Header.scss';
class Header extends React.Component {

  render() {
    const {user, logout, loadLanguage} = this.props;
    console.log(this.props);

    return (
      <header className="navbar-fixed">
        <nav className="darken-4">
          <div className="container nav-wrapper">
            <NavLink to="/" className="brand-logo left navLogo"><span className="t">T</span><span className="u">U</span></NavLink>
              <ul className="right hide-on-small-only">
                {!user && <li><NavLink to="/login"><FormattedMessage id="app.header.login"/></NavLink></li>}
                {!user && <li><NavLink to="/signup"><FormattedMessage id="app.header.signup"/></NavLink></li>}
                <li><NavLink to="/plans"><FormattedMessage id="app.header.plans" /></NavLink></li> 
                <li><NavLink to="/agent-profile">Agent Profile</NavLink></li>      
                {user && 
                  <li>
                    <NavLink to="/dashboard">
                      <img id="profilePhoto"  src={user.photoURL} />
                    </NavLink>
                  </li>}
                {user && <li><span style={{color:"gray"}}>Hi!</span>  <strong>{user.name}</strong></li>}
                {user && <li><a className="btn logoutButton" onClick={logout} style={{cursor: 'pointer'}}>Log Out</a></li>}
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