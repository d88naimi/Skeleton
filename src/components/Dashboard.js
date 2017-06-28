import React from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './DashboardSidebar';
import DashboardEditInfo from './DashboardEditInfo';
import DashboardPayment from './DashboardPayment';
import { NavLink } from 'react-router-dom'
import './Dashboard.scss';

function mapStateToProps(state) {
  return {

  };
}

export class Dashboard extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div className="container row">
	      
	      <DashboardSidebar/>
	      {this.props.location.pathname === "/dashboard" && <div className="container col s12 m9 l9 center-align defaultBox"><h1>Hello</h1></div>} 
	      {this.props.location.pathname === "/dashboard/edit-info" && <DashboardEditInfo/>}
	      {this.props.location.pathname === "/dashboard/payments" && <DashboardPayment/>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Dashboard)

