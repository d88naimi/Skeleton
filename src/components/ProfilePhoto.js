import React from 'react';
import { connect } from 'react-redux';


class ProfilePhoto extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const user = this.props.user;
    return (
      <div className="center-align">
      	{user && <img className="photo" src={user.photoURL} style={{'width': this.props.size+"px"}} alt="profile picture transUnited"></img>}
      </div>
    );
  }
}

export default connect(  
  ({auth}) => {
    return ({ user: auth.user })
  },
  null
)(ProfilePhoto)
