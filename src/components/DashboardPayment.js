import React from 'react';
import { connect } from 'react-redux';
import {FormattedMessage, FormattedDate, injectIntl} from 'react-intl';



export class DashboardPayment extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col s12 m9 l9 payments">
        	<h5><FormattedMessage id="app.dashboardPay.header" /></h5>
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
		          <label htmlFor="first_name"><FormattedMessage id="app.dashboardPay.fn" /></label>
		        </div>

		        <div className="input-field col s6">
		          <input id="last_name" type="text" className="validate"></input>
		          <label htmlFor="last_name"><FormattedMessage id="app.dashboardPay.ln" /></label>
		        </div>
		      </div>

		       <div className="row">
			    <div className="col s9">
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">credit_card</i>
			          <input type="text" className="validate"></input>
			          <label htmlFor="icon_prefix2"><FormattedMessage id="app.dashboardPay.cn" /></label>
			        </div>
			      </div>
			    </div>
			  </div>

			  <div className="row">
			    <div className="col s5">
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">credit_card</i>
			          <input placeholder="MMYY" type="text" className="validate"></input>
			          <label htmlFor="icon_prefix2"><FormattedMessage id="app.dashboardPay.ed" /></label>
			        </div>
			      </div>
			    </div>
			  </div>

			   <div className="row">
			    <div className="col s5">
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">credit_card</i>
			          <input placeholder="###" type="password" className="validate"></input>
			          <label htmlFor="icon_prefix2"><FormattedMessage id="app.dashboardPay.cvc" /></label>
			        </div>
			      </div>
			    </div>
			  </div>
		    
		    </form>

		    <div className="col s12 center-align">
				<hr/>
				<br/>
				<button type="button" className="btn themeButton"><FormattedMessage id="app.dashboardPay.sendBtn" /></button>
				<br/>
			</div>


		  </div>
    );
  }
}

export default connect()(DashboardPayment)
