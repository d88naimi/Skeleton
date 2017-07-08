import React from 'react';
import { connect } from 'react-redux';
import './Spinner.scss';

const Spinner = ({isLoading}) => (
  <div>
    { isLoading &&
      <div className="spinnerBox">
        <div className="loader">
          Loading...
        </div>
      </div>
    }
  </div>
);
export default connect(
  ({isLoading}) => ({isLoading})
)(Spinner)
