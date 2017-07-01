import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


export default class Agents extends React.Component {


  constructor(props) {
    super(props);
    console.log(this.props);
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
            <li><em>{this.props.ciry}</em></li>
            <li><em>{this.props.email}</em></li>
            <li><em>{this.props.phone}</em></li>
            <li><em>{this.props.avgRate}</em></li>
            <Link to={'/agents/' + this.props.id}>TO AGENT DETAILS</Link>
            
          </ul>
        </div>
      </div>
    </div>

    );
  }
}
