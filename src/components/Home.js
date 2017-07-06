import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import './Home.scss';
import {FormattedMessage, FormattedDate} from 'react-intl';
import { loadLanguage } from '../actions/lang'
import { Link } from 'react-router-dom'
class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    const {time, loadLanguage} = this.props;
    return (
      <div className="container homeBackground whiteBackground">
      	<div className="center-align">
          <iframe src="https://player.vimeo.com/video/224391868?title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0"  allowFullScreen></iframe>
      	</div>
        <div className="container">
	      	<hr/>
          <button className="btn langButton" onClick={loadLanguage.bind(null, 'en')}>English</button>
          <button className="btn langButton" onClick={loadLanguage.bind(null, 'es')}>Español</button>
          
	      	<h4 className="blueFont">

            <FormattedMessage id="app.home.intro"/>
          </h4>

	       <div className="container  center-align">
              <Search/>
          <button className="btn themeButton" onClick={loadLanguage.bind(null, 'en')}>English</button>
          <button className="btn themeButton" onClick={loadLanguage.bind(null, 'es')}>Español</button>
          <button className="btn themeButton" onClick={loadLanguage.bind(null, 'es')}>Korean</button>
               <h4><em><FormattedDate value={time} /></em></h4>
            </div>
      	</div>

      </div>
    );
  }
}

export default connect(
  (state) => ({time: Date.now()}),
  { loadLanguage }
) (Home)
