import React from 'react';
import { connect } from 'react-redux';
import './Agent.scss';

function mapStateToProps(state) {
  return {

  };
}

export class AgentComment extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="agentComment">
        <span>
          {Date(this.props.created)}
        </span>
      	<p> {this.props.comment}</p>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(AgentComment)
