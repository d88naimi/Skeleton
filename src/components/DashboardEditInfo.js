import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import {uploadImage} from '../actions/auth';
import PropTypes from 'prop-types';

class DashboardEditInfo extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  handleUpload() {
    this.props.uploadImage(this.fileUpload);
	}

  render() {
    const {user} = this.props;
    return (
			<div className="col s12 m9 l9 editProfileInfoBox" >
				<h5>Edit Profile</h5>
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

							<div className="input-field col s6">
								<i className="material-icons prefix">account_circle</i>
								<input id="icon_prefix" type="text" className="validate"/>
								<label htmlFor="icon_prefix">Name</label>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">email</i>
								<input id="icon_telephone" type="tel" className="validate"/>
								<label htmlFor="icon_telephone">E-mail</label>
							</div>

							<div className="input-field col s6">
								<i className="material-icons prefix">my_location</i>
								<input id="icon_prefix" type="text" className="validate"/>
								<label htmlFor="icon_prefix">Location</label>
							</div>

							<div className="input-field col s6">
								<select className="browser-default col s12" defaultValue="English">
									<option value="" disabled>Languages</option>
									<option value="English">English</option>
									<option value="Spanish">Español</option>
									<option value="Korean">한국어</option>
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

export default connect(
  ({auth}) => {
    return ({ user: auth.user })
  }, {uploadImage}
)(DashboardEditInfo)
