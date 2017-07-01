import React from 'react';
import './Agent.scss';

class AgentSingle extends React.Component {

  render() {
    return(
      <div className="col s12 m3 l3 agentDetails" style={{backgroundColor:"lightpink"}}>
          <img src={this.props.photo} alt="agent picture transUnited"/>
          <h3>{this.props.name}</h3>
          <p>{this.props.phone}</p>
          <p>{this.props.email}</p>
          <p>{this.props.language}</p>
          <p>{this.props.rating}</p>
          <p>{this.props.description}</p>
      </div>
    )
  }
}
export default AgentSingle;