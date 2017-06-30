import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';
import './Plans.scss';


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

        <div className="col s12 m6 l4 xl4">
          <div className="card bronze">
            <div className="card-content ">
              <span className="card-title">Package Bronze</span>
               <h2>
                <em>$1700</em>
              </h2>
              <ul>
                <li>Driver license</li>
                <li>Bank Account</li>
                <li>Cell phone</li>
              </ul>
            </div>
            <div className="card-action">
              <a className="btn themeButton" href="#">Select</a>
             
            </div>
          </div>
        </div>  
        
    
        <div className="col s12 m6 l4 xl4">
          <div className="card silver">
            <div className="card-content ">
              <span className="card-title">Package Silver</span>
              <h2>
                  <em>$3000</em>
                </h2>
                <ul>
                  <li>Driver license</li>
                  <li>Bank Account</li>
                  <li>Cell phone</li>
                  <li>Apartment</li>
                
                </ul>
            </div>
            <div className="card-action">
              <a className="btn themeButton" href="#">Select</a>
              
            </div>
          </div>
        </div>
    
        <div className="col s12 m6 l4 xl4">
          <div className="card gold">
            <div className="card-content ">
              <span className="card-title">Package Gold</span>
              
              <h2>
                  <em>$4000</em>
                </h2>
                <ul>
                  <li>Driver license</li>
                  <li>Bank Account</li>
                  <li>Cell phone</li>
                  <li>Apartment</li>
                  <li>School</li>
                  <li>Citizenship</li>
                  <li>Vehicle</li>
                
                </ul>
            </div>
            <div className="card-action">
              <a className="btn themeButton" href="#">Select</a>
              
            </div>
          </div>
       </div>
</div>
 
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Plans)


