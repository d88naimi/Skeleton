import React from 'react';
import { connect } from 'react-redux';
import './Agent.scss';
import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';

export class AgentComment extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {

 
    return (
      <div className="agentComment row">
        <span className="commentDate">
          <FormattedDate value={new Date(this.props.created)} />
        </span>
        <div className="center-align commentAuthorBox col s2 m2 l2">
          {!this.props.authorPhotoURL && <img  src="http://www.free-icons-download.net/images/user-icon-44709.png" alt="user comment"/>}
          {this.props.authorPhotoURL && <img  src={this.props.authorPhotoURL} alt="user comment"/>}
          <span>{this.props.authorName}</span>
        </div>
        <div className="col s10 m10 l10">
      	 <p>{this.props.comment}</p>
        </div>
      </div>
    );
  }
}

export default connect(
 
)(AgentComment)
