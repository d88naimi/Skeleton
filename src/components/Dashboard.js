import React from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './DashboardSidebar';
import DashboardEditInfo from './DashboardEditInfo';
import DashboardPayment from './DashboardPayment';
import DashboardDefault from './DashboardDefault';
import DashboardAgents from './DashboardAgents';
import { NavLink } from 'react-router-dom'
import './Dashboard.scss';


export class Dashboard extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {

  	const user = this.props.user;
    return (
    <div className="container row">
	      
	      <DashboardSidebar/>
	      {this.props.location.pathname === "/dashboard" && <DashboardDefault/>} 
	      {this.props.location.pathname === "/dashboard/edit-info" && <DashboardEditInfo/>}
	      {this.props.location.pathname === "/dashboard/payments" && <DashboardPayment/>}
	      {this.props.location.pathname === "/dashboard/my-agents" && <DashboardAgents/>}
      </div>
    );
  }
}

export default connect(
    ({auth}) => {
    console.log(auth);
    return ({ user: auth.user })
  },
  null
// Implement map dispatch to props
)(Dashboard)

