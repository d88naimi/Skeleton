import React from 'react';
import photo from '../assets/images/cafe.jpg';
import Agents from './Agents';
import { connect } from 'react-redux';
import axios from 'axios';
import {searchAgents} from '../actions/agent'
import {getAgentList} from '../reducers';
class Results extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
   const {searchAgents} = this.props;
    
    if(this.props.location.search === '') searchAgents({});
    else {
      let search = this.props.location.search.split('?')[1]; // ?language=Korean&location=San%20Diego&
      const queryParams = search.split('&').reduce((acc, text) => {
        if(text) {
          acc[text.split('=')[0]] = text.split('=')[1];
        }
        return acc;
      }, {});
      searchAgents(queryParams);
    }
  }

  render() {
    const {agents} = this.props;
    // console.log(this.props);
    return (
      <div className="container row">
        {agents && agents.map( (agent,index) =>{
            return <Agents
            id={agent._id}
            key={index} 
            role={agent.role}
            name={agent.name}
            languages={agent.languages }
            city={agent.location}
            email={agent.email}
            phone={agent.phone}
             text={agent.text}
            avgRate={agent.avgRate}
            />
        })}
    </div>
    );
  }
}

export default connect(
  state => ({agents: getAgentList(state)}),
  { searchAgents } 
)(Results);