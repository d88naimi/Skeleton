import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Navigation} from "react-mdl";
import {Userbox} from "./Userbox";
import {logout} from "../actions/auth";
import './Header.scss';

class HeaderWrapper extends React.Component {

  render() {
    const {user, logout} = this.props;
    return (
      <Header transparent title={<span><strong>VIIP</strong></span>} style={{color: 'white'}}>
        {!user &&
        <Navigation>
          <a href="/auth/google">Log in</a>
          <NavLink to="/signup">Sign up</NavLink>
        </Navigation>}
        {user && <Userbox user={user} />}
        {user && <a onClick={logout} style={{cursor: 'pointer'}}>Log Out</a>}
      </Header>
    );
  }
}

HeaderWrapper.propTypes = {
  user: PropTypes.object
};

//
export default connect(
  (state) => {
    console.log(state);
    return { user: state.auth.user }
  },
  { logout }
)(HeaderWrapper);