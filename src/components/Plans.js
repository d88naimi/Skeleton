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
      <div className="panel panel-default">
     <div className="col s12 m4 l3 xl3 offset-xl1">
        <div className="panel-heading">
          <h1 className="panel-title text-center"> Package Silver</h1>
            <h2>
              <em>$1700</em>
            </h2>
          </div>
         <div className="panel panel-default">
         <div className="col s12 m4 l3 xl3 offset-xl1">
          <h1 className="panel-title text-center"> Package Gold</h1>
            <h2>
              <em>$3000</em>
             </h2>
             </div>
          </div>
          <div className="panel panel-default">
           <h1 className="panel-title text-center"> Package Platinum</h1>
          <h2> <em>$4000</em></h2>
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
