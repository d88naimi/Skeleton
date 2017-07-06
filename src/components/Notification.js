import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import io from 'socket.io-client';
import {receiveMessage, getRooms, loadRoom} from '../actions/chat'
class Notification extends React.Component {

  componentWillReceiveProps(newProps) {
    if(newProps.user && this.props.user === null) {
      newProps.getRooms();
      this.socket = io();

      this.socket.emit('chatroom', newProps.user._id);

      this.socket.on('receiveMsg', function(msg) {
        newProps.receiveMessage(msg);
      });

      this.socket.on('roomCreated', function(room) {
        newProps.loadRoom(room, newProps.user._id);
      });
    }

    if(this.props.user && !newProps.user) {
      //this is logout event
      this.socket.emit('pleaseDisconnect');
    }
  }

  render() {
    const {totalNewMsgCounter, user, numOfChatRoom} = this.props;
    return (
      <li>
        { user && numOfChatRoom > 0 &&
        <NavLink to="/messages">
          Messages {totalNewMsgCounter > 0 && <span className="new badge blue">{totalNewMsgCounter}</span>}
        </NavLink>}
      </li>
    );
  }
}

export default connect(
  ({auth, lang, chat}) => ({
    user: auth.user,
    language: lang.language,
    totalNewMsgCounter: chat.totalNewMsgCounter,
    numOfChatRoom: chat.ids.length
  }),
  { receiveMessage, getRooms, loadRoom }
) (Notification);