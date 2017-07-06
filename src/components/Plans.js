import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';
import './Plans.scss';
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
    <div className=" container row">

        <div className="col s12 m12 l4 bronze">
          <div className="card themeContainer">
            <div className="card-content  center-align">
              <img src="./bronzeplan.png" width="150px" alt="bronze plan transunited"/>
               <h2>
                <em>$1700</em>
              </h2>
              <ul>
              <li><FormattedMessage id="app.plans.dl" /></li>
              <li><FormattedMessage id="app.plans.ba" /></li>
              <li><FormattedMessage id="app.plans.cellPhone" /></li>
              </ul>
            </div>
            <div className="card-action center-align">
              <a className="btn themeButton" href="#">
                <FormattedMessage id="app.plans.selectBtn" />
              </a>
             
            </div>
          </div>
        </div>  
        
    
        <div className="col s12 m12 l4 silver">
          <div className="card themeContainer">
            <div className="card-content center-align">
              <img src="./silverplan.png" width="150px" alt="silver plan transunited"/>
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
            <div className="card-action center-align">
              <a className="btn themeButton" href="#">
                <FormattedMessage id="app.plans.selectBtn" />
              </a>
              
            </div>
          </div>
        </div>
    
        <div className="col s12 m12 l4 gold">
          <div className="card themeContainer">
            <div className="card-content center-align">
            <img src="./goldplan.png" width="150px" alt="gold plan transunited"/>
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
            <div className="card-action center-align">
              <a className="btn themeButton" href="#">
                <FormattedMessage id="app.plans.selectBtn" />
              </a>
              
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


