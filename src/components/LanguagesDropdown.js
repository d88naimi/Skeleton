import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadLanguage } from '../actions/lang'


class LanguagesDropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSelectChange(event) {
        const target = event.target;
        const value = target.value;
        console.log(value);
        const { loadLanguage} = this.props;
        loadLanguage(value);
  }

  render() {
    // console.log(this.props);
    const { loadLanguage} = this.props;
    const languages = [
      "Korean",
      "Chinese",
      "Spanish",
      "Hindi",
      "Bengali",
      "Punjabi",
      "Telgu",
      "Arabic",
      "German",
      "Russian",
      "Indonesian",
      "Portuguese",
      "English"
    ]
    return (
      <div>
            <select onChange={this.handleSelectChange.bind(this)} className="browser-default" defaultValue="en" style={{color:'lightgrey', backgroundColor: '#323232', border:'none', marginTop:'9px'}}>
                  <option value="" disabled >Choose your Language</option>
                  {languages.map(l => (<option value={l}>{l}</option>))}
              
            </select>
            
       </div>     
    );
  }
}

export default connect(
  null,
  { loadLanguage }
) (LanguagesDropdown)


