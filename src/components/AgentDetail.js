import React from 'react';
import { connect } from 'react-redux';
import { selectAgent } from '../actions/agent'
import {getSelectedAgent} from '../reducers';
var Rating = require('react-rating');

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
        <Rating
  stop={6}
  empty={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
    'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
  full={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
/>
        </div>}
      </div>
    );
  }
}

export default connect(
  state => ({agent: getSelectedAgent(state)}),
  { selectAgent }
)(AgentDetail);