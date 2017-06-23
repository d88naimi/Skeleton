import React from 'react';
import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class Drawer extends React.Component {



  render() {
    return (
      <ul id="slide-out" className="side-nav">
        <li><div className="userView">
          <div className="background">
          </div>
          <a href="#!name"><span className="white-text name">John Doe</span></a>
          <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
        <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">Subheader</a></li>
        <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
    )
  }
}

export default Drawer;
// export default connect(
// )(DrawerWrapper);

{/*<a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>*/}
