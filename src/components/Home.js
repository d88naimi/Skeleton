import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import './Home.scss';
import {FormattedMessage, FormattedDate} from 'react-intl';
import { loadLanguage } from '../actions/lang';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
     //<FormattedDate value={time} />
    const {time, loadLanguage} = this.props;
    return (
      <div className="container homeBackground whiteBackground">
          <div className='col s12 m12 l12 row'>
           <h5 className="blueFont center-align">
            <FormattedMessage id="app.home.intro"/>
          </h5>
           <hr/>
           <div className="container center-align">
            <Search selectedLang="All" selectedLoc="All"/>

           </div>
           <div className="col s12 m12 l12 divider">
          </div>
           <iframe className="col s12 m12 l12" height="360px" src="https://player.vimeo.com/video/224391868?title=0&byline=0&portrait=0" frameBorder="0"  allowFullScreen></iframe>      
          </div>
          <div className="col s12 m12 l12 divider">
          </div>
        <div className="col s12 m12 l12 row center-align">
          <hr/>
          <div className="col s12 m6 l4 ">
            <img className="homePic" src='./sfBridge.jpg' width='100%' alt="americanlife home image"/>
          </div>
          <div className="col s12 m6 l8">
            <h5><FormattedMessage id="app.faqs.q1" /></h5>
            <hr/>
            <p>
              <FormattedMessage id="app.faqs.a1" />
            </p>
          </div>
          <div className="col s12 m12 l12 divider">
          </div>
          <div className="col s12 m6 l8">
            <h5><FormattedMessage id="app.faqs.q5" /></h5>
            <hr/>
            <p>
              <FormattedMessage id="app.faqs.a8" />
            </p>
            <p>
              <FormattedMessage id="app.faqs.a9" />
            </p>
            <NavLink className="btn langButton" to="/plans">
              <FormattedMessage id="app.faqs.aTen" />
            </NavLink>
          </div>
           <div className="col s12 m6 l4 ">
            <img className="homePic" src='./agent.jpg' width='100%' alt="americanlife home image"/>
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

// links for languages
          // <button className="btn langButton" onClick={loadLanguage.bind(null, 'en')}>English</button>
          // <button className="btn langButton" onClick={loadLanguage.bind(null, 'es')}>Español</button>
