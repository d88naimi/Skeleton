import React from 'react';
import { connect } from 'react-redux';



export class DashboardAgetns extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col s12 m9 l9 center-align agents">
	      <h5>My Agents</h5>
	      <hr/>
	      
      </div>
    );
  }
}

export default connect(

)(DashboardAgetns)
