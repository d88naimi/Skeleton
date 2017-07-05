import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import io from 'socket.io-client';
import {receiveMessage, getRooms, loadRoom} from '../actions/chat'
class Notification extends React.Component {

  componentWillReceiveProps(newProps) {
    if(newProps.user && this.props.user === null) {
      newProps.getRooms();
      const socket = io();

      socket.emit('chatroom', newProps.user._id);

      socket.on('receiveMsg', function(msg) {
        console.info(msg);
        newProps.receiveMessage(msg);
      });

      socket.on('roomCreated', function(room) {
        console.info(room);
        newProps.loadRoom(room, newProps.user._id);
      })
    }
  }

  render() {
    const {newMsgCounter, user, numOfChatRoom} = this.props;
    return (
      <li>
        { numOfChatRoom &&
        <NavLink to="/messages">
          Messages {newMsgCounter > 0 && <span className="new badge blue">{newMsgCounter}</span>}
        </NavLink>}
      </li>
    );
  }
}

export default connect(
  ({auth, lang, chat}) => ({
    user: auth.user,
    language: lang.language,
    newMsgCounter: chat.newMsgCounter,
    numOfChatRoom: chat.ids.length
  }),
  { receiveMessage, getRooms, loadRoom }
) (Notification);