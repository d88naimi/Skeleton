import React from 'react';
import { connect } from 'react-redux';
import './Agent.scss';
import {FormattedDate} from 'react-intl';
import "./Results.scss";
const Rating = require('react-rating');

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
        <Rating
          className="resultStars"
          empty="fa fa-star-o"
          full={['fa fa-star rateColor']}
          fractions={2}
          initialRate={this.props.rate}
          readonly={true}
        />
      </div>
    );
  }
}

export default connect(
 
)(AgentComment)
