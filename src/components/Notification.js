import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    const {user} = this.props;
    // const socket = io();
    // socket.on('receiveMsg', function(msg) {
    //   console.log(msg);
    // })
  }

  componentWillReceiveProps(newProps) {
    if(newProps.user && this.props.user === null) {
      const socket = io();
      socket.emit('room', newProps.user._id);
    }
  }



  render() {
    return (<span>NOFITICATION</span>);
  }
}

export default connect(
  ({auth, lang}) => ({ user: auth.user, language: lang.language }),
) (Notification);