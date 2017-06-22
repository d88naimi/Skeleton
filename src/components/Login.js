import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.scss';
import { signup, login } from '../actions/auth'

function mapStateToProps(state) {
  return {

  };
}

export class Login extends React.Component {


  constructor(props) {
    super(props);
    console.log(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleSignup(event){
	  event.preventDefault();
		const { signup } = this.props;
		//currently this is signup.
		signup({name: 'Micky Mouse', email: "example@viip.com", password: 'password'});
  }

  handleLogin(someEvent) {
  	const { login } = this.props;
  	login({email: "example@viip.com", password: 'password'});
	}

  render() {
    return (
      <div className="container center-align whiteBackground" style={{backgroundColor:'#f2f2f2', padding:'10px'}}>
	      <form onSubmit={this.handleSignup}>
		    <div className="row">
			    <div className="input-field col s12">
			      <input  placeholder="johnnyPotatoes" id="Username" type="text" className="validate"></input>
			      <label className="active" htmlFor="Username">Username</label>
			    </div>
			</div>
			<div>
		       <div className="row">
			    <div className="input-field col s12">
			      <input  placeholder="password123" id="Password" type="password" className="validate"></input>
			      <label className="active" htmlFor="Password">Password</label>
			    </div>
			    </div>
			</div>
			    <button className="btn waves-effect waves-light themeButton" type="submit" name="action">SignupFake
			    <i className="material-icons right">send</i>
			  </button>
					<br/><br/>
		  </form>
				<button className="btn waves-effect waves-light themeButton" type="button" onClick={this.handleLogin} name="action">LoginFake
					<i className="material-icons right">send</i>
				</button>
		  <hr/>
		  <div className="container center-align transparentWhiteOutline" style={{padding:'10px'}}>
		  		<h5>or</h5>
		  		<h5>Log in with</h5><br/>
			  <a href="/auth/google" className="waves-effect waves-light btn themeButton"><i className="material-icons left">vpn_key</i>Google</a><br/><br/>
			  <a className="waves-effect waves-light btn themeButton"><i className="material-icons left">vpn_key</i>Facebook</a><br/><br/>
			  <a className="waves-effect waves-light btn themeButton"><i className="material-icons left">vpn_key</i>Twitter</a>
	      </div>
	     
      </div>

    );
  }
}

export default connect(
  mapStateToProps,
	{ signup, login }
)(Login)
