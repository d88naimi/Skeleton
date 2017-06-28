
import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class ContactUs extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
      return (
    <div className="container">
        <div className="col s2 m2 l2">
		    <h2 className="header">TransUnited</h2>
		    <div className="card horizontal">
		      <div className="card-image">
		        <img id="cardImage" src="./logo.png" alt="TransUnited logo"></img>
		      </div>
		      <div className="card-stacked">
		        <div className="card-content">
		          <p><i>TransUnited</i> helps the thousands of immigrants make the transition to the United States smoother by connecting them to a selection of agents handpicked that can offer them a number of services to assist them with their transfer.  Services can include translation, helping opening a bank account, finding a car, finding a place to live in, etc.  Our app is easy to use and it can be displayed in other languages for easy access and peace of mind so you know you’re contacting the right agent. </p>
		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank">Repository</a>
		        </div>
		      </div>
		    </div>
		  </div>
      
      <h3> </h3>
      <h5> Get in Touch </h5>
     <div className="col s12 m6 xl4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
             
              <h1> <em>Contact Us </em> </h1>
              <h3> <em>Have a question? </em> </h3>
                
              
            </div>
            <div className="card-action">
              <a href="#"><em>Call</em></a>
              <a href="d88naimi@gmail.com"><em>Email</em></a>
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
)(ContactUs)
