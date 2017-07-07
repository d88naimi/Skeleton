import React from 'react';
import { NavLink } from 'react-router-dom'
import {FormattedMessage, FormattedDate} from 'react-intl';
import { connect } from 'react-redux';
import './ErrorMsg.scss';
import {deleteError} from '../actions/auth'


class ErrorMsg extends React.Component {

  componentWillReceiveProps(newProps) {
    const {deleteError} = this.props;
    if(newProps.error) {
      setTimeout(() => {
        deleteError();
      }, 3000);
    }
  }

  render() {
    const {error, deleteError} = this.props;
    return (
      <div>
        {error && 
          <div className="alert">
            <span onClick={deleteError} className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            {error}
          </div>
        }
      </div>
    );
  }
}

export default connect(
  ({auth, lang}) => ({ error: auth.errorMsg, language: lang.language }),
  {deleteError}
) (ErrorMsg);