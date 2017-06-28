import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class ProfilePhoto extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<img src={this.props.photoURL} style={{'width': this.props.size+"px"}} alt="profile picture transUnited"></img>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(ProfilePhoto)
