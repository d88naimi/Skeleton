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
      <div className="container">
        <div className="row">
          <div className="col s4">
            <ul className="collection">
              { rooms.map((room, idx) =>
                (<li key={idx} className="collection-item" style={{marginBottom: '3px', backgroundColor: room.hasNewMsg ? '#b1dcfb': '#fff' }}>
                  <Link to={match.path + '/' + room._id}>
                    <div className="row"  style={{marginBottom: 0}}>
                      <div className="col s2">
                        <img src={room.user1._id === user._id ? room.user2.photoURL : room.user1.photoURL} className="circle responsive-img"/>
                      </div>
                      <div style={{fontWeight: room.hasNewMsg ? 'bold': 'normal'}} className="col s10">
                        <span>{room.user1._id === user._id ? room.user2.name : room.user1.name}</span>
                        <div>{room.latestMessage}</div>
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
