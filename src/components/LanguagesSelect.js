import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadLanguage } from '../actions/lang'


class LanguagesSelect extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSelectChange(event) {
        const target = event.target;
        const value = target.value;
        // console.log(value);
        const { loadLanguage} = this.props;
        loadLanguage(value);
  }

  render() {
    // console.log(this.props);
    const { loadLanguage} = this.props;
    return (
      <div>
            <select onChange={this.handleSelectChange.bind(this)} className="browser-default" defaultValue="en" style={{color:'lightgrey', backgroundColor: '#323232', border:'none', marginTop:'9px'}}>
                  <option value="" disabled >Choose your option</option>
                  <option value="en">English</option>
                  <option value="es">Español </option>
                  <option value="kr">Korean </option>
            </select>
       </div>     
    );
  }
}

export default connect(
  null,
  { loadLanguage }
) (LanguagesSelect)


