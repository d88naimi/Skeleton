import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadLanguage } from '../actions/lang'


class CityDropdown extends React.Component {

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
      "Anaheim",
      "San Diego",
      "San Francisco",
      "Palo Alto",
      "Santa Monica ",
      "Sacramento",
      "Malibu",
      "Santa Barbara",
      "San Jose",
      "Oakland",
      "Beverly Hills",
      "Irvine",
      "Beverly Hills",
      "Monterey",
      "Long Beach"
    ]
    return (
      <div>
            <select onChange={this.handleSelectChange.bind(this)} className="browser-default" defaultValue="en" style={{color:'lightgrey', backgroundColor: '#323232', border:'none', marginTop:'9px'}}>
                  <option value="" disabled >Choose your City</option>
                  {languages.map(l => (<option value={l}>{l}</option>))}
              
            </select>
       </div>     
    );
  }
}


export default connect(
  null,
  { loadLanguage }
) (CityDropdown)

