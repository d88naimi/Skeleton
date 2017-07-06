import React from 'react';
import { connect } from 'react-redux';
import './Spinner.scss';

function mapStateToProps(state) {
  return {

  };
}

export class Spinner extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loader">Loading...</div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Spinner)
