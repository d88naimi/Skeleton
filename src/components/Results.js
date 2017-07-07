import React from 'react';
import photo from '../assets/images/cafe.jpg';
import Agents from './Agents';
import { connect } from 'react-redux';
import axios from 'axios';
import {searchAgents} from '../actions/agent'
import {getAgentList} from '../reducers';
import Search from './Search';
import "./Results.scss";

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
      <div className="container center-align">
         <div className="col s12 m12 l12 xl12 whiteBack white">
              <Search/>
              </div>
            
          <div className="container flexParent " >
            {agents && agents.map( (agent,index) =>{
                return <Agents
                 key={index}
                 agent= {agent}
                />
            })}
          </div> 

    </div>
    );
  }
}

export default connect(
  state => ({agents: getAgentList(state)}),
  { searchAgents } 
)(Results);