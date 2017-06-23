import React from 'react';
import photo from '../assets/images/cafe.jpg';
const Results = () => (
 <div className="row">
    <div className="col s12 m6">
        <div className="card ">
        
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={photo}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Agent David <i className="material-icons right">United States</i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
        </div>
      </div>
      </div>
  

);

export default Results;