import React from 'react';
import { connect } from 'react-redux';
import {uploadImage} from '../actions/auth'
class PhotoTest extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {user, uploadImage} = this.props;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card medium">
            <div className="card-image">
              {user && <img src={user.photoURL}/>}
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <form>
              <div className="file-field input-field">
                <div className="btn">
                  <span>File</span>
                  <input type="file" accept="image/*"
                        ref={(ref) => this.fileUpload = ref} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text"/>
                </div>
              </div>
            </form>
            <button onClick={uploadImage.bind(null, this.fileUpload)} className="waves-effect waves-light btn">Upload</button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({lang, auth}) => ({
    language: lang.language,
    user: auth.user
  }),
  {uploadImage}
) (PhotoTest)
