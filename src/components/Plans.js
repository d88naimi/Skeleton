import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';



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
              <span className="card-title">Package Silver</span>
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
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>  
        
    
        <div className="col s12 m6 xl4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Package Gold</span>
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
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
    
        <div className="col s12 m6 xl4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Package Platinum</span>
              
              <h2>
                  <em>$4000</em>
                </h2>
                <ul>
                <li>Driver license</li>
                <li>Bank Account</li>
                <li>Cell phone</li>
                <li>Apartment</li>
                <li>School</li>
                
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
// Implement map dispatch to props
)(Plans)


