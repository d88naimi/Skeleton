import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';
import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';
import { loadLanguage } from '../actions/lang';



function mapStateToProps(state) {
  return {

  };
}

export class Plans extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="row">

        <div className="col s12 m6 xl4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title"><FormattedMessage id="app.plans.silverHeader" /></span>
               <h2>
                <em>$1700</em>
              </h2>
              <ul>
              <li><FormattedMessage id="app.plans.dl" /></li>
              <li><FormattedMessage id="app.plans.ba" /></li>
              <li><FormattedMessage id="app.plans.cellPhone" /></li>
              </ul>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>  
        
    
        <div className="col s12 m6 xl4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title"><FormattedMessage id="app.plans.goldheader" /></span>
              <h2>
                  <em>$3000</em>
                </h2>
                <ul>
                <li><FormattedMessage id="app.plans.dl" /></li>
                <li><FormattedMessage id="app.plans.ba" /></li>
                <li><FormattedMessage id="app.plans.cellPhone" /></li>
                <li><FormattedMessage id="app.plans.residence" /></li>
                
                </ul>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
    
        <div className="col s12 m6 xl4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title"><FormattedMessage id="app.plans.platinumHeader" /></span>
              
              <h2>
                  <em>$4000</em>
                </h2>
                <ul>
                <li><FormattedMessage id="app.plans.dl" /></li>
                <li><FormattedMessage id="app.plans.ba" /></li>
                <li><FormattedMessage id="app.plans.cellPhone" /></li>
                <li><FormattedMessage id="app.plans.residence" /></li>
                <li><FormattedMessage id="app.plans.school" /></li>
                <li><FormattedMessage id="app.plans.citizenship" /></li>
                <li><FormattedMessage id="app.plans.car" /></li>
                
                </ul>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
       </div>
</div>
 
    );
  }
}

export default connect(
  mapStateToProps,
  { loadLanguage }
// Implement map dispatch to props
)(Plans)


