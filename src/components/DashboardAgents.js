import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {

  };
}

export class DashboardAgents extends React.Component {

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
  mapStateToProps,
// Implement map dispatch to props
)(DashboardAgents)

