import React from 'react';
import Agents from './Agents';
import { connect } from 'react-redux';
import {searchAgents} from '../actions/agent'
import {getAgentList} from '../reducers';
import Search from './Search';
import "./Results.scss";

class Results extends React.Component {



  constructor(props) {
    super(props);
    this.state = {};
  }

  search(props) {
    const {searchAgents} = props;
    let search = props.location.search.split('?')[1]; // ?language=Korean&location=San%20Diego&
    const queryParams = search.split('&').reduce((acc, text) => {
      if(text) {
        acc[text.split('=')[0]] = text.split('=')[1];
      }
      return acc;
    }, {});
    this.state.language = queryParams.language;
    this.state.location = queryParams.location;
    searchAgents(queryParams);
  }

  componentWillReceiveProps(nextProps) {
    const {searchAgents} = this.props;
    if(this.props.location.search !== nextProps.location.search) {
      if(nextProps.location.search === '') searchAgents({});
      else {
        this.search(nextProps);
      }
    }

  }

  componentDidMount() {
    const {searchAgents} = this.props;
    if(this.props.location.search === '') searchAgents({});
    else {
      this.search(this.props);
    }
  }


  render() {
    const {agents} = this.props;
    // console.log(this.props);
    return (
      <div className="container center-align row white">
        <div className="col s12 m12 l12 xl12 white searchContainer">
          <Search selectedLang={decodeURI(this.state.language)} selectedLoc={decodeURI(this.state.location)}/>
        </div>
        <div className="col s12 m12 l12 divider">
        </div>

        <div className="col s12 m12 l12 xl12 row container">
          {agents && agents.map( (agent,index) =>{
            return <Agents
              key={index}
              agent= {agent}
              selectedLang={this.state.language}
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