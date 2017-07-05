import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { sendMessage, getMessages} from "../actions/chat";

class ChatBox extends React.Component {

  componentWillReceiveProps(newProps) {
    if(this.props.entities === null && newProps.entities ||
      this.props.match.params.roomId !== newProps.match.params.roomId) {
      newProps.getMessages(newProps.match.params.roomId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const roomId = this.props.match.params.roomId;
    const {entities, user, sendMessage} = this.props;
    const message = {
      to: entities[roomId].user1._id === user._id ? entities[roomId].user2._id : entities[roomId].user1._id,
      text: this.chatInput.value.trim()
    };
    sendMessage({message, roomId});
    this.chatInput.value = '';
  }

  render() {
    const {messages, user, entities, match, selected} = this.props;
    const roomId = match.params.roomId;
    // const
    return (
      <div className="row">

        <div className="col s12 m12">
          <div className="card">
            { selected &&
            <div className="card-content">
              <span className="card-title">Chat with {entities[roomId].user1._id === user._id ? entities[roomId].user2.name : entities[roomId].user1.name}</span>
              {messages.map((msg, idx) => (
                <div key={idx} className="row" style={{marginBottom: 0}}>
                <div className="col s2">
                <img src={ entities[roomId][msg.from].photoURL } className="circle responsive-img"/>
                </div>
                <div className="col s10">
                <div>{msg.text}</div>
                <div><i>{msg.updatedAt}</i></div>
                </div>
                </div>
                ))}
            </div>}
            <div className="card-action">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="type text here" ref={(ref) => this.chatInput = ref}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({auth, chat}) => ({ user: auth.user, selected: chat.selected, messages: chat.messages, entities: chat.entities}),
  { getMessages, sendMessage }
)(ChatBox)
