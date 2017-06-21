import React from 'react';
import { connect } from 'react-redux';
import {Search} from './Search';

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
      <div className="container">
      	<h3>Home</h3>
      	<Search />

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Home)
