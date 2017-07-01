import React from 'react';
import { connect } from 'react-redux';
import { selectAgent } from '../actions/agent'
import {getSelectedAgent} from '../reducers';
import AgentComment from './AgentComment';
import AgentSingle from './AgentSingle';
import './Agent.scss';

class AgentDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    const { selectAgent } = this.props;
    const id = this.props.match.params.id;
    selectAgent(id);
    this.renderAgent = this.renderAgent.bind(this);
  }

  renderAgent(){
    return(
      <div className="row">
        <AgentSingle className="col s12 m3 l3"
          name={agent.name}
          rating ={agent.avgRate}
          email={agent.email}
          phone={agent.phone}
          language={agent.languages.toString()}
          description={agent.text}
        />
          <div className="col s12 m9 l9">
           {agent.comments.map( (comment,index)=>{
              return <AgentComment key={index} comment={comment}/>
           })}
          </div>
        </div>
      )
  }
          

  render() {

    const {agent} = this.props;

    return (
      <div className="container themeAgent">
        <h3>Agent Details</h3>
        <hr/>
        {agent && this.renderAgent()}      
      </div>
    );

  }
}

export default connect(
  state => ({agent: getSelectedAgent(state)}),
  { selectAgent }
)(AgentDetail);