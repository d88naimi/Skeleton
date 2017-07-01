import React from 'react';
import './Agent.scss';

class AgentSingle extends React.Component {

  render() {
    return(
      <div className="col s12 m3 l3 agentDetails center-align">
          <img src={this.props.photo} alt="agent picture transUnited"/>
          <h4>{this.props.name}</h4>
           <a className="contactInfo" href={"tel:"+this.props.phone} >{this.props.phone}</a>
           <br/>
           <a className="contactInfo" href={"mailto:"+this.props.email} target="_blank">{this.props.email}</a>
          <br/>
          <br/>
          <h5>Rating</h5>
          {this.props.rating && <h5 className="rating">{this.props.rating}</h5> || <h5 className="rating">N/A</h5>}
		      <h5>Bio</h5>
		    	 <p>{this.props.description}</p>
		    	 <hr/>
		    	 <p><strong>Languages:</strong></p>
		    	 <p>{this.props.languages}</p>

      </div>
    )
  }
}
export default AgentSingle;