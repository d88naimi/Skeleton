import React from 'react';
import photo from '../assets/images/cafe.jpg';
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
        <div className="col s12 m4 l3 xl2">
          <div className="card">
            <div className="card-image">
              <img src="images/sample-1.jpg"></img>
              <span className="card-title">{this.props.name}</span>
            </div>
            <div className="card-content">
              <p>{this.props.name}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
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

