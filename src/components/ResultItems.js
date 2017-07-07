import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';
var Rating = require('react-rating');


function mapStateToProps(state) {
  return {

  };
}

export class ResultItems extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
      
        <div className="col s12 m4 l3 xl3 offset-xl1">
      <div className="card">
        <div className="card-image">
          <img src={this.props.photoURL} alt="result agent AmericanLife"></img>
          <span className="card-title">{this.props.name}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content center-align">
          <ul id= "agentbio">
          <li><em>{this.props.role}</em></li>
          <li><em>{this.props.name}</em></li>
            <li>{this.props.languages.join(', ')}</li>
            <li><strong><em>{this.props.location}</em></strong></li>
            <li><em>{this.props.email}</em></li>
            <li><em>{this.props.phone}</em></li>
            <li><em>{this.props.avgRate}</em></li>
            <Rating
              empty="fa fa-star-o fa-2x"
              full="fa fa-star fa-2x"
              fractions={2}
              stop={this.props.rate}
            />
            
          </ul>
        </div>
      </div>
    </div>

    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(ResultItems)