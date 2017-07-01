import React from 'react';
import { connect } from 'react-redux';
import { selectAgent } from '../actions/agent'
import {getSelectedAgent} from '../reducers';

class AgentDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const { selectAgent } = this.props;
    const id = this.props.match.params.id;
    selectAgent(id);
  }
  render() {
    const {agent} = this.props;
    return (
      <div>
        { agent && <div>
          <h2>SELECTED AGENT</h2>
          <h3>{agent.name}</h3>
          <h3>{agent.avgRate}</h3>
          <h3>{agent.email}</h3>
          <h3>{agent.phone}</h3>
          <h3>{agent.languages.toString()}</h3>
          <h3>{agent.text}</h3>
        </div>}
      </div>
    );
  }
}

export default connect(
  state => ({agent: getSelectedAgent(state)}),
  { selectAgent }
)(AgentDetail);