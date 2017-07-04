import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

class ChatBox extends React.Component {

  render() {
    const {messages, user, match} = this.props;
    console.log(messages);
    const opponentId = match.params.opponent;

    return (
      <div className="row">
        {messages[opponentId] &&
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Chat with {messages[opponentId][0].to._id === opponentId ? messages[opponentId][0].to.name : messages[opponentId][0].from.name}</span>

              {messages[opponentId].map((msg, idx) => (
                <div key={idx} className="row" style={{marginBottom: 0}}>
                  <div className="col s2">
                    <img src={msg.from.photoURL} className="circle responsive-img"/>
                  </div>
                  <div className="col s10">
                    <div>{msg.text}</div>
                    <div><i>{msg.updatedAt}</i></div>
                  </div>
                </div>
              ))}



            </div>
            <div className="card-action">
              <input type="text" placeholder="type text here"/>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default connect(
  ({auth, msg}) => ({ user: auth.user, messages: msg.messages }),
)(ChatBox)
