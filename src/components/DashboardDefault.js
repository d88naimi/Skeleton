import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import {FormattedMessage, FormattedDate, injectIntl} from 'react-intl';



export class DashboardDefault extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col s12 m9 l9 center-align defaultBox">
	      <h4>
          <FormattedMessage id="app.dashboard.default" />
        </h4>
	      <br/>
	      <img src="./skylinelogo.jpg" alt="welcome picture transUnited"/>
      </div>
    );
  }
}

export default connect(

)(DashboardDefault)
