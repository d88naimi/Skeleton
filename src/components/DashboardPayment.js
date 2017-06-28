import React from 'react';
import { connect } from 'react-redux';


export class DashboardPayment extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col s12 m9 l9 payments">
        	<h5>Submit A Payment</h5>
        	<hr/>

    	    <p>
		      <input type="checkbox" className="filled-in" id="visa"  />
		      <label htmlFor="visa">Visa</label>
		    </p>
		    <p>
		      <input type="checkbox" className="filled-in" id="mc"  />
		      <label htmlFor="mc">Mastercard</label>
		    </p>
		    <p>
		      <input type="checkbox" className="filled-in" id="ae"  />
		      <label htmlFor="ae">American Express</label>
		    </p>


		    <form className="col s12">
		      <div className="row">
		        <div className="input-field col s6">
		          <input id="first_name" type="text" className="validate"></input>
		          <label htmlFor="first_name">First Name</label>
		        </div>

		        <div className="input-field col s6">
		          <input id="last_name" type="text" className="validate"></input>
		          <label htmlFor="last_name">Last Name</label>
		        </div>
		      </div>

		       <div className="row">
			    <div className="col s9">
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">credit_card</i>
			          <input type="text" className="validate"></input>
			          <label htmlFor="icon_prefix2">Credit Card Number</label>
			        </div>
			      </div>
			    </div>
			  </div>

			  <div className="row">
			    <div className="col s3">
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">credit_card</i>
			          <input placeholder="MMYY" type="text" className="validate"></input>
			          <label htmlFor="icon_prefix2">Expiration Date</label>
			        </div>
			      </div>
			    </div>
			  </div>

			   <div className="row">
			    <div className="col s3">
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">credit_card</i>
			          <input placeholder="###" type="password" className="validate"></input>
			          <label htmlFor="icon_prefix2">CVC</label>
			        </div>
			      </div>
			    </div>
			  </div>
		    
		    </form>

		    <div className="col s12 center-align">
				<hr/>
				<br/>
				<button type="button" className="btn themeButton">Send Payment</button>
				<br/>
			</div>


		  </div>
    );
  }
}

export default connect()(DashboardPayment)
