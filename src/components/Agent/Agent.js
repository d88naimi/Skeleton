import React from "react";
import AgentBio from "./AgentBio";
import AgentSpecifics from "./AgentSpecifics";
import Opportunity from "./Opportunity";
import './Agent.scss';



class AgentSingle extends React.Component {
render(){
  return(
  <div  className="agent container">
    <div className="row">
      <div className="col s12 m12">
        <div className="row">

        <AgentBio />
        <Opportunity />

        </div>
      </div>

      <div className="col s12">
        <div className="row">
          <AgentSpecifics />
        </div>
      </div>
    </div>
  </div>
  )
  }
}

export default AgentSingle;

