import React from 'react';
import { connect } from 'react-redux';


export class ProfilePhoto extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center-align">
      	<img className="photo" src={this.props.photoURL} style={{'width': this.props.size+"px"}} alt="profile picture transUnited"></img>
      </div>
    );
  }
}

export default connect()(ProfilePhoto)
