import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.scss';

function mapStateToProps(state) {
  return {

  };
}

export class Login extends React.Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){

  event.preventDefault();

  }

  render() {
    return (
      <div className="container center-align" style={{backgroundColor:'#f2f2f2', padding:'10px'}}>
	      <form onClick={this.handleSubmit}>
		    <div className="row">
			    <div className="input-field col s12">
			      <input  placeholder="johnnyPotatoes" id="Username" type="text" className="validate"></input>
			      <label className="active" htmlFor="Username">Username</label>
			    </div>
			</div>
			<div>
		       <div className="row">
			    <div className="input-field col s12">
			      <input  placeholder="password123" id="Password" type="text" className="validate"></input>
			      <label className="active" htmlFor="Password">Password</label>
			    </div>
			    </div>
			</div>
			    <button className="btn waves-effect waves-light red" type="submit" name="action">Submit
			    <i className="material-icons right">send</i>
			  </button><br/><br/>
		  </form>
		  <hr/>
		  <div className="container center-align" style={{backgroundColor:'lightgrey', padding:'10px'}}>
		  		<p>or</p>
		  		<h5>Sign in with</h5><br/>
			  <a href="/auth/google" className="waves-effect waves-light btn blue"><i className="material-icons left">vpn_key</i>Google</a><br/><br/>
			  <a className="waves-effect waves-light btn blue"><i className="material-icons left">vpn_key</i>Facebook</a><br/><br/>
			  <a className="waves-effect waves-light btn blue"><i className="material-icons left">vpn_key</i>Twitter</a>
	      </div>
	     
      </div>

    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Login)
