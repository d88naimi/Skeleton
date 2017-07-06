import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import ChatBox from "./ChatBox";
import { Link } from 'react-router-dom'
import {getChatRoomList} from '../reducers/chat';
import {unselectChatroom} from '../actions/chat';

//TODO: Lifecycle (leave) => selected: null
class MessagesTest extends React.Component {
  componentWillUnmount() {
    const {unselectChatroom} = this.props;
    unselectChatroom();
  }

  render() {
    const {rooms, user, match} = this.props;
    return (
      <div className="container" style={{backgroundColor: "#f2f2f2"}}>
        <div className="row">
          <div className="col s4 chatRoomsBox center-align">
            <ul className="collection center-align">
              { rooms.map((room, idx) =>
                (<li key={idx} className="collection-item" style={{marginBottom: '3px', backgroundColor: room.hasNewMsg ? '#b1dcfb': '#fff' }}>
                  <Link to={match.path + '/' + room._id}>
                    <div className="container"  style={{marginBottom: 0}}>
                      <div className="">
                        <img src={room.user1._id === user._id ? room.user2.photoURL : room.user1.photoURL} className="ChatBoxPicture"/>
                        <br/>
                      </div>
                      <div style={{fontWeight: room.hasNewMsg ? 'bold': 'normal'}} className="">
                        <span><b>{room.user1._id === user._id ? room.user2.name : room.user1.name}</b></span>
                        <div className="msgPreview">{room.latestMessage}</div>
                      </div>
                    </div>
                  </Link>
                </li>)
              )}
            </ul>
          </div>

          <div className="col s8">
            <Route path={match.path + '/:roomId'} component={ChatBox} />
          </div>

        </div>
      </div>
    );
  }
}

export default connect(
  ({auth, chat}) => ({ user: auth.user, rooms: getChatRoomList(chat) }),
  {unselectChatroom}
)(MessagesTest)
