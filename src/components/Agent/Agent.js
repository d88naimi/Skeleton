import React from "react";
import AgentBio from "./containers/AgentBio";
import AgentSpecifics from "./containers/AgentSpecifics";
import Opportunity from "./containers/Opportunity";
import './Agent.scss';

class Agent extends React.Component {
render(){
  return(
  <div  className="agent">
    <div className="row">
      <div className="col s12">
        <div className="row">

        <AgentBio />
        <AgentSpecifics />
        <Opportunity />

        </div>
      </div>
    </div>
  </div>
  )
  }
}

export default Agent;

