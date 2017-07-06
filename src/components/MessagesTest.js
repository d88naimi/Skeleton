import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import ChatBox from "./ChatBox";
import { Link } from 'react-router-dom'
import "./Messages.scss";


class MessagesTest extends React.Component {

  render() {
    const {messages, user, match} = this.props;
    console.log(match);
    const ids = Object.keys(messages);
    return (
      <div className="container grey lighten-5">
        <div id="messagingContainer" className="row">
          <section className="col s5">
          <div className="row">
              <div className="col s12 m12">
                <div className="card row">
                  <h3 className="col s8">Messaging</h3>
                  <a className="col s4" href="#"><i className="medium material-icons">chat_bubble_outline</i></a>
                </div>
              </div>
              <div className="col s12 m12">
                <div className="card row">
                  <ul className="collection">
                    { ids.map((id, idx) =>
                      (<li key={idx} className="collection-item" style={{marginBottom: '3px'}}>
                        <Link to={match.path + '/' + id}><div className="row"  style={{marginBottom: 0}}>
                          <div className="col s2">
                            <img src={messages[id][0].to._id === user._id ? messages[id][0].from.photoURL : messages[id][0].to.photoURL} className="circle responsive-img"/>
                          </div>
                          <div className="col s10">
                            <span><strong>{messages[id][0].to._id === user._id ? messages[id][0].from.name : messages[id][0].to.name}</strong></span>
                            <div>{messages[id][messages[id].length -1].text}</div>
                          </div>
                        </div></Link>
                      </li>)
                    )}
                  </ul>
                </div>
              </div>
          </div>
          </section>

          <section className="col s7">
            <Route path={match.path + '/:opponent'} component={ChatBox} />
          </section>

        </div>
      </div>
    );
  }
}

export default connect(
  ({auth, msg}) => ({ user: auth.user, messages: msg.messages }),
)(MessagesTest)
