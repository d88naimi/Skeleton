import React from 'react';
import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {Drawer, Navigation} from "react-mdl";

const DrawerWrapper = ({count}) => (
  <Drawer title="Title">
    <Navigation>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </Navigation>
  </Drawer>
);

export default DrawerWrapper;
// export default connect(
// )(DrawerWrapper);