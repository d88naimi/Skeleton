import React from 'react';
import { connect } from 'react-redux';
import {Search} from './Search';
import './Home.scss';

function mapStateToProps(state) {
  return {

  };
}

export class Home extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container homeBackground whiteBackground">
      	
      	<img className="homeImage" src="./skylinelogo.jpg" alt="transunited home"></img>
      	<div className="container">
	      	<hr/>
	      	<h4 className="blueFont">Start Here</h4>
	      	<Search />
      	</div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Home)
