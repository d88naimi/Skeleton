import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import {uploadImage} from '../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';

class DashboardEditInfo extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
    	name:'',
    	location: '',
    	email: '',
    	password:'',
    	languages: [],
    	msg: '',
    	passMSG:'',
    	temppassword:''
    }
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleAgentSubmit = this.handleAgentSubmit.bind(this);
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getPasswordConfirm = this.getPasswordConfirm.bind(this);
    this.getEnglish = this.getEnglish.bind(this);
    this.getSpanish = this.getSpanish.bind(this);
    this.getKorean = this.getKorean.bind(this);
  }

    getName(e){

    	let name= e.target.value.trim();
    	//console.log(name);
    	this.setState({
    		name: name
    	});
    }

    getEmail(e){
    	
    	let email= e.target.value.trim();
    	this.setState({
    		email: email
    	});
    }

    getLocation(e){
    	
    	let location= e.target.value.trim();
    	this.setState({
    		location: location
    	});
    }

    getPassword(e){
    	
    	let temppassword= e.target.value.trim();
    	this.setState({
    		temppassword: temppassword
    	});
    }

    getPasswordConfirm(e){
    	
    	let password= e.target.value.trim();

    	if(this.state.temppassword === password){
    		this.setState({
    		password: password,
    		passMSG:"Passwords Match"
    		});
    		
    	}else{
    		this.setState({
    			passMSG:"Passwords Must Match"
    		})
    	}

    	
    }


    getEnglish(e){

    	let inputCheckbox = event.target.checked;
    	if(inputCheckbox){
    		this.state.languages.push('english');
    	}
    }

    getSpanish(e){

    	let inputCheckbox = event.target.checked;
    	if(inputCheckbox){
    		this.state.languages.push('spanish');
    	}
    }

    getKorean(e){

    	let inputCheckbox = event.target.checked;
    	if(inputCheckbox){
    		this.state.languages.push('korean');
    	}
    }

    handleUpload() {
    this.props.uploadImage(this.fileUpload);
	}

	generateObject(){

		var INFO={};

		if(this.state.name){
			INFO['name']= this.state.name;
		}
		if(this.state.email){
			INFO['email']= this.state.email;
		}
		if(this.state.location){
			INFO['location']= this.state.location;
		}
		if(this.state.languages){
			INFO['languages']= this.state.languages;
		}

		return INFO;
	}

  handleUserSubmit(){

  	const {user} = this.props;
  	let userINFO = this.generateObject();
  	console.log("userINFO",userINFO);
  	let userID = user._id;

  	axios.put('/api/users/'+userID, userINFO).then(res =>{
  		this.setState({
  			msg: "Update Successful"
  		});
  	}).catch(err =>{
  		this.setState({
  			msg: "Update Failed"
  		});
  	})
  }

  handleAgentSubmit(){

  	const {user} = this.props;
  	let agentINFO = this.generateObject();
  	let agentID= user._id;

  	axios.put('/api/users/agent/'+agentID, agentINFO).then(res =>{
  		this.setState({
  			msg: "Update Successful"
  		});
  	}).catch(err =>{
  		this.setState({
  			msg: "Update Failed"
  		});
  	})
  }

  render() {
    const {user} = this.props;
    return (
			<div className="col s12 m9 l9 editProfileInfoBox" >
				{user.role === "user" && <h5><b>User:</b> Profile Edit</h5>}
				{user.role === "agent" && <h5><b>Agent:</b> Profile Edit</h5>}
				<hr/>
				<div className="row center-align" style={{'padding': "0px 100px"}}>
          {user && <img className="photo" src={user.photoURL} style={{'width': "100px"}} alt="profile picture transUnited"/>}
					<form>
						<div className="file-field input-field">
							<div className="uploadButton">
								<span>Click to Change Profile Photo</span>
								<input type="file" accept="image/*" ref={(ref) => this.fileUpload = ref} />
							</div>
							<div className="file-path-wrapper">
								<input className="file-path validate" type="text"/>
							</div>
						</div>
					</form>
					<button onClick={this.handleUpload.bind(this)} className="uploadButton">Upload</button>
				</div>
				<div className="row">
					<form className="col s12">
						<div className="row">

							<div className="input-field col s12">
								<i className="material-icons prefix">account_circle</i>
								<input id="icon_prefix" type="text" className="validate" onChange={this.getName}/>
								<label htmlFor="icon_prefix">Name</label>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">email</i>
								<input id="icon_telephone" type="tel" className="validate" onChange={this.getEmail}/>
								<label htmlFor="icon_telephone">E-mail</label>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">my_location</i>
								<input id="icon_prefix" type="text" className="validate" onChange={this.getLocation}/>
								<label htmlFor="icon_prefix">Location</label>
							</div>

							<div className="input-field col s12 center-align">
								<h5 style={{color: this.state.passMSG === "Passwords Match" ? "green": "red"}}>{this.state.passMSG}</h5>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">vpn_key</i>
								<input id="icon_prefix" type="password" className="validate" onChange={this.getPassword}/>
								<label htmlFor="icon_prefix">Password</label>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">vpn_key</i>
								<input id="icon_prefix" type="password" className="validate" onChange={this.getPasswordConfirm}/>
								<label htmlFor="icon_prefix">Verify Password</label>
							</div>

							{/*<div className="input-field col s6">
								<select className="browser-default col s12" defaultValue="English" onChange={this.Languages}>
									<option value="" disabled>Languages</option>
									<option value="English">English</option>
									<option value="Spanish">Español</option>
									<option value="Korean">한국어</option>
								</select>
							</div>*/}

							<div className="col s6 container">
						      <input type="checkbox" id="eng" value="english" onChange={this.getEnglish}/>
						      <label htmlFor="eng">English</label>
						      <br/>
						      <input type="checkbox" id="sp" value="spanish" onChange={this.getSpanish}/>
						      <label htmlFor="sp">Español</label>
						      <br/>
						      <input type="checkbox" id="ko" value="korean" onChange={this.getKorean}/>
						      <label htmlFor="ko">한국어</label>
						      <br/>
						    </div>

							<div className="col s12 center-align">
								<hr/>
								<br/>
								{user.role === "user" && <button type="button" onClick={this.handleUserSubmit} className="btn themeButton">Save User Info</button>}
								{user.role === "agent" && <button type="button" onClick={this.handleAgentSubmit} className="btn themeButton">Save Agent Info</button>}
								<hr/>
								<h5 style={{color: this.state.msg === "Update Successful" ? "green": "red"}}>{this.state.msg}</h5>
							</div>

						</div>
					</form>
				</div>
			</div>
    );
  }
}

export default connect(
  ({auth}) => {
    return ({ user: auth.user })
  }, {uploadImage}
)(DashboardEditInfo)
