import React from 'react';
import { connect } from 'react-redux';
import ProfilePhoto from './ProfilePhoto';
import { NavLink } from 'react-router-dom'

function mapStateToProps(state) {
  return {

  };
}

export class Dashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state={
    	photo: "https://cdn-img.easyicon.net/png/5792/579263.gif",
    	size: "100"
    }
  }


  render() {
    return (
      <div className="container row" style={{backgroundColor:'grey'}}>
      	<h5>Dashboard</h5>
      	<div className="col s12 m3 l3 row" style={{backgroundColor:'lightblue'}}>
      		<ProfilePhoto className="col s3 m12 l12" photoURL={this.state.photo} size={this.state.size}/>		  
		  <ul className="collection with-header col s9 m12 l12">
	        <li className="collection-header"><h4>User Name</h4></li>
	        <li className="collection-item"><NavLink to="/dashboard/profile">Profile</NavLink></li>
	        <li className="collection-item">Alvin</li>
	        <li className="collection-item">Alvin</li>
	        <li className="collection-item">Alvin</li>
	      </ul>
      	</div>
      	<div className="col s12 m9 l9" style={{backgroundColor:'lightyellow'}}>
      		  <div className="row">
			    <form className="col s12">
			      <div className="row">

			        <div className="input-field col s6">
			          <i className="material-icons prefix">account_circle</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label for="icon_prefix">Name</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">email</i>
			          <input id="icon_telephone" type="tel" className="validate"></input>
			          <label for="icon_telephone">E-mail</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">chat_bubble_outline</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label for="icon_prefix">Languages</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">my_location</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label for="icon_prefix">Location</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">code</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label for="icon_prefix">Other</label>
			        </div>

			        <div className="input-field col s6">
			          <i className="material-icons prefix">code</i>
			          <input id="icon_prefix" type="text" className="validate"></input>
			          <label for="icon_prefix">Other</label>
			        </div>

			      </div>
			    </form>
			  </div>
      	</div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Dashboard)

