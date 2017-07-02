
import React from 'react';
import { connect } from 'react-redux';
import "./ContactUs.scss";
import {FormattedMessage, FormattedDate} from 'react-intl';

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
		          <p><i>TransUnited</i>
                <FormattedMessage id="app.faqs.a1" />
              </p>
		        </div>
		        <div className="card-action">
		          <a href="https://github.com/d88naimi/Skeleton" target="_blank"><FormattedMessage id="app.about.link1" /></a>
		        </div>
		      </div>
		    </div>
		  </div>

     <div  className= "col s12 m6 xl4">
          <div className="card center-align">
            <div id="contactUs" className="card-content ">
             
              <h1> 
              <em>
                <FormattedMessage id="app.footer.contact" />
              </em> </h1>
              <h4> 
                <em>
                  <FormattedMessage id="app.footer.question" />
                </em> 
              </h4>
            </div>
            <div className="card-action">
              <a href="#"><em>
              <FormattedMessage id="app.footer.call" /> 
              <FormattedMessage id="app.footer.number" />
              transUS</em></a>
              <a href="mailto:widgets@abcwidgets.com"><em><FormattedMessage id="app.footer.email" /> TransUnited</em></a>
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
