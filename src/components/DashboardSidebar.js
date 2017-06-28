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
		photo: "https://cdn-img.easyicon.net/png/5792/579263.gif",
		size: "100"
    }
  }

  render() {
    return (
     
      	<div className="col s12 m3 l3 row sidebar">
      		<br/>
      		
      		<ProfilePhoto className="col s3 m12 l12" photoURL={this.state.photo} size={this.state.size}/>		  
		  <ul className="collection col s9 m12 l12">
	        <li className="collection-item"><NavLink to="/dashboard">Home</NavLink></li>
	        <li className="collection-item"><NavLink to="/dashboard">Home</NavLink></li>
	        <li className="collection-item"><NavLink to="/dashboard/payments">Payments</NavLink></li>
	        <li className="collection-item"><NavLink to="/dashboard/edit-info">Edit Info</NavLink></li>
	      </ul>
      </div>
      
    );
  }
}

export default connect()(DashboardSidebar)
