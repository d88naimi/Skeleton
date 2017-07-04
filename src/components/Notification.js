import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import io from 'socket.io-client';
import {receiveMessage, getMessages} from '../actions/message'
class Notification extends React.Component {

  componentWillReceiveProps(newProps) {
    if(newProps.user && this.props.user === null) {
      newProps.getMessages();
      const socket = io();
      socket.emit('room', newProps.user._id);
      socket.on('receiveMsg', function(msg) {
        console.info(msg);
        newProps.receiveMessage(msg);
      })
    }
  }



  render() {
    const {newMsgCounter} = this.props;
    return (
      <li>
        <NavLink to="/messages">
          Messages {newMsgCounter > 0 && <span className="new badge blue">{newMsgCounter}</span>}
        </NavLink>
      </li>
    );
  }
}

export default connect(
  ({auth, lang, msg}) => ({ user: auth.user, language: lang.language, newMsgCounter: msg.newMsgCounter }),
  { receiveMessage, getMessages }
) (Notification);