import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Userbox} from "./Userbox";
import {logout} from "../actions/auth";
import './Header.scss';

class Header extends React.Component {

  render() {
    const {user, logout} = this.props;
    console.log(user);
    return (
      <header className="navbar-fixed">
        <nav className="blue darken-4">
          <div className="container nav-wrapper">
            <a href="#" className="brand-logo">VIIP</a>
            <ul className="right hide-on-small-only">
              {!user && <li><a href="/auth/google">Google</a></li>}
              {!user && <li><NavLink to="/login">Log In</NavLink></li>}
              {user && 
                <li>
                  <a href="/dashboard">
                    <img className="profilePhoto"  src={user.photoURL} />
                  </a>
                </li>}
              {user && <li><strong>{user.name}</strong></li>}
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
  ({auth}) => ({ user: auth.user }),
  { logout }
)(Header);