import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.scss';
import { signup, login } from '../actions/auth'

// function mapStateToProps(state) {
//   return {

//   };
// }

export class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state={
    	color: "#f2f2f2",
    	EMAIL: "",
    	PASS: "",
    	NAME: ""
    }
    console.log(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getName = this.getName.bind(this);
    this.renderSignupForm = this.renderSignupForm.bind(this);
  }

  getEmail(event){

  	let inputEmail= event.target.value.trim();

  	this.setState({
  		EMAIL: inputEmail
  	});

  }

   getPassword(event){

  	let inputPassword= event.target.value.trim();

  	this.setState({
  		PASS: inputPassword
  	});

  }

    getName(event){

  	let inputName= event.target.value.trim();

  	this.setState({
  		NAME: inputName
  	});

  }

  handleSignup(event){
	  event.preventDefault();
		const { signup } = this.props;
		//currently this is signup.
		signup({name: this.state.NAME, email: this.state.EMAIL, password: this.state.PASS });
  }

  handleLogin(someEvent) {
  	const { login } = this.props;
  	login({email: this.state.EMAIL, password: this.state.PASS });
	}


	renderSignupForm(){
			return(
				<div className="row">
				    <div className="input-field col s12">
				      <input  placeholder="Johnny Boy" id="Name" type="text" className="validate" onChange={this.getName}></input>
				      <label className="active" htmlFor="Username">Name</label>
				    </div>
				</div>
				);
	}

	componentDidMount(){
		
		if(this.props.location.pathname === "/login" ){
			this.setState({
				color:"#cc1818"
			})
		}else{
			this.setState({
				color:"#185392"
			})
		};
	}


  render() {
    return (


    <div className="container center-align whiteBackground" style={{border: this.state.color+" 2px solid", padding:'10px'}}>
	      <form onSubmit={this.handleSignup}>
	      	{this.props.location.pathname === "/login" && <h5>WELCOME BACK</h5>}
	      	{this.props.location.pathname === "/signup" && <h5>PLEASE FILL THIS OUT</h5>}
	      	{this.props.location.pathname === "/signup" && this.renderSignupForm()}

		    <div className="row">
			    <div className="input-field col s12">
			      <input  placeholder="johnnyPotatoes@email.com" id="Email" type="text" className="validate" onChange={this.getEmail}></input>
			      <label className="active" htmlFor="Email">Email</label>
			    </div>
			</div>
			<div>
		       <div className="row">
			    <div className="input-field col s12">
			      <input  placeholder="password123" id="Password" type="password" className="validate" onChange={this.getPassword}></input>
			      <label className="active" htmlFor="Password">Password</label>
			    </div>
			    </div>
			</div>


			   {this.props.location.pathname === "/signup" && <button className="btn waves-effect waves-light themeButton" type="submit" name="action">Sign Up
			    <i className="material-icons right">send</i>
			  </button>}

				
		  </form>
				{this.props.location.pathname === "/login" && <button className="btn waves-effect waves-light themeButton" type="button" onClick={this.handleLogin} name="action">Submit
					<i className="material-icons right">send</i>
				</button> }

		  <hr/>
		  {this.props.location.pathname === "/signup" && <div className="container center-align transparentWhiteOutline" style={{padding:'10px'}}>
		  		<h5>or</h5>
		  		<h5>Sign Up with</h5><br/>
			  <a href="/auth/google" className="waves-effect waves-light btn themeButton"><i className="material-icons left">vpn_key</i>Google</a><br/><br/>
			  <a className="waves-effect waves-light btn themeButton"><i className="material-icons left">vpn_key</i>Facebook</a><br/><br/>
			  <a className="waves-effect waves-light btn themeButton"><i className="material-icons left">vpn_key</i>Twitter</a>
	      </div>}
	     
      </div>

    );
  }
}

export default connect(
  null,
	{ signup, login }
)(Login)


