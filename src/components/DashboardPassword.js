import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import {uploadImage} from '../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';
import {FormattedMessage, FormattedDate, injectIntl} from 'react-intl';

class DashboardPassword extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
      oldPassword:'',
      msg: '',
      passMSG:'',
      tempPassword:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOldPassword = this.getOldPassword.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getPasswordConfirm = this.getPasswordConfirm.bind(this);
  }

  getOldPassword(e){

    let oldPassword= e.target.value.trim();
    this.setState({
      oldPassword
    });
  }

  getPassword(e){

    this.setState({
      tempPassword: e.target.value.trim()
    });
  }

  getPasswordConfirm(e){

    let password= e.target.value.trim();

    if(this.state.tempPassword === password){
      this.setState({
        newPassword: password,
        passMSG:""
      });

    } else{
      this.setState({
        passMSG:"Passwords Must Match"
      })
    }
    console.log(this.state);

  }

  handleSubmit(){

    const {user} = this.props;
    axios.put(`/api/users/${user._id}/password`, {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword
    }).then(res =>{
      this.setState({
        msg: "Password changed"
      });
    }).catch(err =>{
      this.setState({
        msg: "Failed"
      });
    })
  }


  render() {
    const {user} = this.props;
    return (
      <div className="col s12 m9 l9 editProfileInfoBox" >
        <br/>
        <h5><b>Change Password</b></h5>
        <hr/>
        {user && user.provider !== 'local' && <div><br/><br/><br/><p style={{color: 'red', textAlign: 'center'}}>Users who logged in with {user.provider.toUpperCase()} can not change password.</p><br/><br/><br/><br/><br/><br/></div>}
        {user && user.provider === 'local' && <div className="row">
          <form className="col s12">
            <div className="row">


              <div className="input-field col s12">
                <i className="material-icons prefix">vpn_key</i>
                <input id="icon_prefix" type="password" className="validate" onChange={this.getOldPassword}/>
                <label htmlFor="icon_prefix">Old Password</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">vpn_key</i>
                <input id="icon_prefix" type="password" className="validate" onChange={this.getPassword}/>
                <label htmlFor="icon_prefix">New Password</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">vpn_key</i>
                <input id="icon_prefix" type="password" className="validate" onChange={this.getPasswordConfirm}/>
                <label htmlFor="icon_prefix">Verify Password</label>
              </div>

              <p style={{color: this.state.msg === "Password changed" ? "green": "red", textAlign: 'center'}}>{this.state.msg}</p>
              <p style={{color: "red", textAlign: 'center'}}>{this.state.passMSG}</p>
              <div className="col s12 center-align">
                <br/>
                <button disabled={!this.state.newPassword || this.state.passMSG} type="button" onClick={this.handleSubmit} className="btn themeButton">Change Password</button>
                <br/>
              </div>
            </div>
          </form>
        </div>}
      </div>


    );
  }
}

export default connect(
  ({auth, lang}) => ({ user: auth.user, language: lang.language })
)(DashboardPassword)
