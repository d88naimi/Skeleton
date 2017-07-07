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
            <p>Lorem Ipsum is simply dummy text of the printing and typambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
          <div className="col s12 m12 l12 divider">
          </div>
          <div className="col s12 m6 l8">
            <h5>People helping people</h5>
            <hr/>
            <p>Lorem Ipsum is simply dummy type and scrambled it to make a1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
