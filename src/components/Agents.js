import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {

  };
}

export class Agents extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        <div className="col s12 m4 l3 xl3 offset-xl1">
      <div className="card">
        <div className="card-image">
          <img src={photo}></img>
          <span className="card-title">{this.props.name}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content center-align">
          <ul>
          <li><em>{this.props.role}</em></li>
          <li><em>{this.props.name}</em></li>
            <li>{this.props.languages.join(', ')}</li>
            <li><em>{this.props.location}</em></li>
            <li><em>{this.props.email}</em></li>
            <li><em>{this.props.phone}</em></li>
            
            
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
)(Agents)