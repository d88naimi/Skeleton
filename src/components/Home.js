import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import './Home.scss';
import {FormattedMessage, FormattedDate} from 'react-intl';
import { loadLanguage } from '../actions/lang';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LanguagesDropdown from "./LanguagesDropdown";
import CityDropdown from "./CityDropdown";

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
            <Search/>
            <li> <LanguagesDropdown /> </li>
            <li> <CityDropdown /> </li>
            
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
            <h5>What is American Life™?</h5>
            <hr/>
            <p>American Life™ is a service helps the thousands of immigrants make the transition to the United States smoother by connecting them to a selection of agents handpicked that can offer them a number of services to assist them with their transfer. Services can include translation, helping opening a bank account, finding a car, finding a place to live in, etc. Our app is easy to use and it can be displayed in other languages for easy access and peace of mind so you know you’re contacting the right agent.</p>
          </div>
          <div className="col s12 m12 l12 divider">
          </div>
          <div className="col s12 m6 l8">
            <h5>Our Experts Are Here To Help</h5>
            <hr/>
            <p>Our handpicked list of agents will make the transfer process a breeze.  Our agents can help you take the stress away from the long and complicated process of applying, filling out tons of paperwork and choosing the right places when you're in another country.</p>
            <p>Check out our different plans and get started today!</p>
            <NavLink className="btn langButton" to="/plans">Plans</NavLink>
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
