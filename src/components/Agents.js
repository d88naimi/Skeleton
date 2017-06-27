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
      <div class="card">
        <div class="card-image">
          <img src={photo}></img>
          <span class="card-title"></span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">{this.props.name}<i class="material-icons"></i></a>
        </div>
        <div class="card-content">
          <ul>
            <li>{this.props.languages.join(', ')}</li>
            <li>{this.props.location}</li>
            <li>Summary of Agent </li>
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

