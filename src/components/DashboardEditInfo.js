import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';

export class DashboardEditInfo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="col s12 m9 l9 editProfileInfoBox" >
            <h5>Edit Profile</h5>
        	<hr/>
      		  <div className="row">
			    <form className="col s12">
			      <div className="row">

			        <div className="input-field col s6">
			          <i className="material-icons prefix">account_circle</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label htmlFor="icon_prefix">Name</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">email</i>
			          <input id="icon_telephone" type="tel" className="validate"></input>
			          <label htmlFor="icon_telephone">E-mail</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">lock</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label htmlFor="icon_prefix">Password</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">my_location</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label htmlFor="icon_prefix">Location</label>
			        </div>

			         <div className="input-field col s6">
					  <select className="browser-default col s12">
					  <option value="" disabled selected>Languages</option>					    
					    <option value="1">English</option>
					    <option value="2">Español</option>
					    <option value="3">한국어</option>
					  </select>
					 </div>

					<div className="col s12 center-align">
					<hr/>
					<br/>
					 <button type="button" className="btn themeButton">Submit</button>
					</div>
					
			      </div>
			    </form>
			  </div>
      	</div>
    );
  }
}

export default connect()(DashboardEditInfo)
