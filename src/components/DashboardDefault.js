import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';


export class DashboardDefault extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col s12 m9 l9 center-align defaultBox">
	      <h4>Welcome Back!</h4>
	      <br/>
	      <img src="./statue.jpeg" alt="welcome picture transUnited"/>
      </div>
    );
  }
}

export default connect(

)(DashboardDefault)
