import React from 'react';
import { connect } from 'react-redux';
import { sendMessage, getMessages} from "../actions/chat";

class ChatBox extends React.Component {

  componentWillReceiveProps(newProps) {
    if(this.props.entities === null && newProps.entities ||
      this.props.match.params.roomId !== newProps.match.params.roomId) {
      newProps.getMessages(newProps.match.params.roomId);
    }
  }

  componentDidMount() {
    if(this.props.entities) {
      this.props.getMessages(this.props.match.params.roomId);
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

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom () {
    // this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
    if(this.messagesEnd) this.messagesEnd.scrollIntoView();
  }

  render() {
    const {messages, user, entities, match, selected} = this.props;
    const roomId = match.params.roomId;
    // const
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content">
              { selected && <span className="card-title">Chat with {entities[roomId].user1._id === user._id ? entities[roomId].user2.name : entities[roomId].user1.name}</span>}
              { selected &&
              <div className="chat-box">
                {messages.map((msg, idx) => (

                  <div key={idx} className="row userMSG" style={{float: msg.from === user._id ? "left": "right", backgroundColor: msg.from === user._id ? "#e2e2e2": "#b5d3f0" }}>
                    <div className="chatIMG" style={{float: msg.from === user._id ? "left": "right"}}>
                      <img src={ entities[roomId][msg.from].photoURL } className="circle responsive-img"/>
                    </div>

                    <div className="col s10 ">
                      <p >{msg.text}</p>
                      <br/>
                      <div className="chatTimestamp"><i>{msg.updatedAt}</i></div>
                    </div>
                  </div>
                ))}
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }} />
              </div>}
            </div>
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
