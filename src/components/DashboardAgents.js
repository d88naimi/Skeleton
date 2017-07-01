import React from 'react';
import { connect } from 'react-redux';
import {Search} from './Search';



class DashboardAgents extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col s12 m9 l9 center-align agents">
	      <h5>My Agents</h5>
	      <hr/>
	      <Search/>
      </div>
    );
  }
}

export default connect(
  null
)(DashboardAgents)
