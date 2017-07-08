import React from 'react';
import './Agent.scss';
import {FormattedMessage, FormattedDate, injectIntl} from 'react-intl';


class AgentSingle extends React.Component {



  render() {
    return(
      <div className="containeragentDetails center-align">
          <div className="container center-align picBox">
            <img className="agentPicture" src={this.props.photo} alt="agent picture transUnited"/>
            <h2 className="flow-text"><b>{this.props.name}</b></h2>
           {this.props.rating && <h5 className="flow-text"> <FormattedMessage id="app.agentSingle.rating" />: {this.props.rating}</h5> || <h5 className="flow-text"><FormattedMessage id="app.agentSingle.rating"/>: N/A</h5>}

            <a className="contactInfo flow-text" href={"tel:"+this.props.phone} >{this.props.phone}</a>
            <br/>
            <a className="contactInfo flow-text" href={"mailto:"+this.props.email} target="_blank">{this.props.email}</a>
            {this.props.languages && <p><b><FormattedMessage id="app.agentSingle.languages" /></b></p>}
            {this.props.languages && this.props.languages.map( (lang,index)=>{
              return <p key={index}>- {lang}</p>
            })}
          </div>
          <div className="container bioBox center-align">
              <h5 className="flow-text"><FormattedMessage id="app.agentSingle.about" />:</h5>
              <p className="flow-text">{this.props.description}</p>
          </div>
      </div>
    )
  }
}
export default AgentSingle;