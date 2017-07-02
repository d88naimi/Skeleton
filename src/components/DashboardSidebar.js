import React from 'react';
import { connect } from 'react-redux';
import ProfilePhoto from './ProfilePhoto';
import { NavLink } from 'react-router-dom'
import './Dashboard.scss';
import {logout} from "../actions/auth";

export class DashboardSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state={
		size: "100"
    }
  }

  render() {
    const {user} = this.props;
    return (   
      	<div className="col s12 m3 l3 row sidebar">
      		<br/>
      		
      		<ProfilePhoto className="col s3 m12 l12" photoURL={user ? user.photoURL : ''} size={this.state.size}/>		  
		  <ul className="collection col s9 m12 l12">
	        <li className="collection-item"><NavLink className="whiteText" to="/dashboard/my-agents">My Agents</NavLink></li>
	        <li className="collection-item"><NavLink className="whiteText" to="/dashboard/payments">Payments</NavLink></li>
	        <li className="collection-item"><NavLink className="whiteText" to="/dashboard/edit-info">Edit Info</NavLink></li>
         <li id="logoutCollection" className="collection-item"><a className="whiteText" onClick={logout} style={{cursor: 'pointer'}}>Log Out</a></li>
	      </ul>
      </div>
      
    );
  }
}

export default connect(
  ({auth}) => ({ user: auth.user}), null
  )(DashboardSidebar)
