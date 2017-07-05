import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';


export class DashboardAgents extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      agentInfo: {}
    }
    this.getAgent = this.getAgent.bind(this);
  }

  getAgent(){

    axios.get('/api/users/agent/5957cefc34852a0efc3cc5f0').then(res =>{
      this.setState({
        agentInfo: res.data
      })
    });

    // console.log("agentInfo", this.state.agentInfo);

  }

          //   {this.state.agentInfo && <img className="photo" src={this.state.agentInfo.photoURL} alt="agent photo"/> }
          // {this.state.agentInfo && <h3>{this.state.agentInfo.name}</h3>}
          // {this.state.agentInfo && <h5>Languages</h5>}
          // {this.state.agentInfo && this.state.agentInfo.languages.map( (lang, index)=>{
          //   return <p key={index}>{lang}</p> })}

  render() {

    const user = this.props.user;

    return (
       <div className="container col s12 m9 l9 center-align agents">
        <h5>My Agents</h5>
        <hr/>
        
        <div className="container center-align">
          {!this.state.agentInfo && <h3>Must be signed in to see agent info</h3>}
        </div>
        
      </div>
    );
  }
}

DashboardAgents.propTypes = {
  user: PropTypes.object
};

export default connect(
  ({auth}) => ({ user: auth.user}),
// Implement map dispatch to props
)(DashboardAgents)

