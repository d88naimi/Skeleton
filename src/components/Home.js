import React from 'react';
import { connect } from 'react-redux';
import {Search} from './Search';
import './Home.scss';
import {FormattedMessage, FormattedDate} from 'react-intl';
import { loadLanguage } from '../actions/lang'
import { Link } from 'react-router-dom'
class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {time, loadLanguage} = this.props;
    return (
      <div className="container homeBackground whiteBackground">
      	
      	<img className="homeImage" src="./skylinelogo.jpg" alt="transunited home"></img>
      	<div className="container">
	      	<hr/>
          <button onClick={loadLanguage.bind(null, 'en')}>English</button>
          <button onClick={loadLanguage.bind(null, 'es')}>Spanish</button>
          
	      	<h4 className="blueFont">
            <FormattedMessage id="app.intro" defaultMessage="WOW"/>
          </h4>
          <p><FormattedMessage id='food' defaultMessage="I don;t know" /></p>
          <p><FormattedDate value={time} /></p>
	      	<Search />
          <p><Link to='/photo-test'>Photo Upload test page</Link></p>
      	</div>

      </div>
    );
  }
}

export default connect(
  (state) => ({time: Date.now()}),
  { loadLanguage }
) (Home)
