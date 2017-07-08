import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import {changeUserInfo, loadUserInfo, uploadImage} from '../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';
import {FormattedMessage, FormattedDate, injectIntl} from 'react-intl';
const languageData = ['Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Malay/Indonesian', 'Turkish',
  'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Korean', 'German', 'French',
  'Punjabi/Lahnda', 'Telugu'];
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
      text: ''
    };
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleAgentSubmit = this.handleAgentSubmit.bind(this);
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getText = this.getText.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getLanguage = this.getLanguage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(!this.user && newProps.user.languages.length > 0) {
      this.state.languages = [...newProps.user.languages, ...this.state.languages];
    }
  }

  getName(e){
    let name= e.target.value.trim();
    this.setState({name});
  }

  getEmail(e){
    let email= e.target.value.trim();
    this.setState({email});
  }

  getText(e){
    let text= e.target.value.trim();
    this.setState({text});
    console.log(text);
  }

  getLocation(e){
    let location= e.target.value.trim();
    this.setState({location});
  }

  getLanguage(e){
    let inputCheckbox = e.target.checked;
    if(inputCheckbox){
      this.state.languages = [...this.state.languages, e.target.value];
    } else {
      const idx = this.state.languages.indexOf(e.target.value);
      if(idx > -1) {
        this.state.languages = [...this.state.languages.slice(0, idx), ...this.state.languages.slice(idx+1)]
      }
    }
  }

  handleUpload() {
    this.props.uploadImage(this.fileUpload);
  }

  generateObject(){

    let INFO={};

    if(this.state.name){
      INFO['name']= this.state.name;
    }
    if(this.state.email){
      INFO['email']= this.state.email;
    }
    if(this.state.location){
      INFO['location']= this.state.location;
    }
    if(this.state.languages.length){
      INFO['languages']= JSON.stringify(this.state.languages);
    }
    if(this.state.text) {
      INFO['text'] = this.state.text;
    }
    return INFO;
  }

  handleUserSubmit(){

    const {user, loadUserInfo} = this.props;
    let userINFO = this.generateObject();
    let userID = user._id;

    axios.put('/api/users/'+userID, userINFO).then(res =>{
      loadUserInfo(res.data);
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

    const {user, loadUserInfo} = this.props;
    let agentINFO = this.generateObject();
    let agentID= user._id;

    axios.put('/api/users/agent/'+agentID, agentINFO).then(res =>{
      loadUserInfo(res.data);
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
        {user && user.role === "user" && <h5><b>User:</b><FormattedMessage id="app.dashboardEdit.header" /></h5>}
        {user && user.role === "agent" && <h5><b>Agent:</b><FormattedMessage id="app.dashboardEdit.header" /></h5>}
				<hr/>
				<div className="row center-align" style={{'padding': "0px 100px"}}>
          {user && <img className="photo" src={user.photoURL} style={{'width': "100px"}} alt="profile picture transUnited"/>}
					<form>
						<div className="file-field input-field">
							<div className="uploadButton">
								<span><FormattedMessage id="app.dashboardEdit.photoChange" /></span>
								<input type="file" accept="image/*" ref={(ref) => this.fileUpload = ref} />
							</div>
							<div className="file-path-wrapper">
								<input className="file-path validate" type="text"/>
							</div>
						</div>
					</form>
					<button onClick={this.handleUpload.bind(this)} className="uploadButton"><FormattedMessage id="app.dashboardEdit.upload" /></button>
				</div>
        {user && <div className="row">
					<form className="col s12">
						<div className="row">

							<div className="input-field col s10">
								<i className="material-icons prefix">account_circle</i>
								<input id="icon_prefix" type="text" defaultValue={user ? user.name : ''} className="validate" onChange={this.getName}/>
								<label className="active" htmlFor="icon_prefix"><FormattedMessage id="app.dashboardEdit.name" /></label>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">email</i>
								<input disabled id="email" type="tel" className="validate" defaultValue={user.email}/>
								<label className="active"  htmlFor="email"><FormattedMessage id="app.dashboardEdit.email" /></label>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">my_location</i>
								<input id="icon_prefix" type="text" defaultValue={user.location} className="validate" onChange={this.getLocation}/>
								<label className="active"  htmlFor="icon_prefix"><FormattedMessage id="app.dashboardEdit.location" /></label>
							</div>

							<div className="input-field col s12 center-align">
								<h5 style={{color: this.state.passMSG === "Passwords Match" ? "green": "red"}}>{this.state.passMSG}</h5>
							</div>

              <div className="input-field col s12">
                <textarea id="textarea" className="materialize-textarea" defaultValue={user.text} onChange={this.getText}/>
                <label className="active" htmlFor="textarea">Who am I?</label>
              </div>

							<div className="col s12 m12 l12">
                <h6>Select Languages</h6><br/>
								<div style={{margin: '0 10px 10px 10px'}}>
                  {languageData.map((l, idx) => (<div className="col s6 m4 l4" key={idx}>
										<input id={l} type="checkbox" defaultChecked={user.languages.indexOf(l) > -1} value={l} onChange={this.getLanguage}/>
										<label htmlFor={l}>{l}</label>
									</div>))}

									<br/>
								</div>
							</div>

							<div className="col s12 center-align">
								<hr/>
								<br/>
                {user && user.role === "user" && <button type="button" onClick={this.handleUserSubmit} className="btn themeButton"><FormattedMessage id="app.dashboardEdit.userBtn" /></button>}
                {user &&user.role === "agent" && <button type="button" onClick={this.handleAgentSubmit} className="btn themeButton"><FormattedMessage id="app.dashboardEdit.agentBtn" /></button>}
								<hr/>
								<h5 style={{color: this.state.msg === "Update Successful" ? "green": "red"}}>{this.state.msg}</h5>
							</div>
						</div>
					</form>
				</div>}
			</div>


    );
  }
}

export default connect(
  ({auth, lang}) => ({ user: auth.user, language: lang.language }),
  {uploadImage, changeUserInfo, loadUserInfo}
)(DashboardEditInfo)
