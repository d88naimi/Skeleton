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
    return (
      <div>
            <select onChange={this.handleSelectChange.bind(this)} className="browser-default" defaultValue="en" style={{color:'lightgrey', backgroundColor: '#323232', border:'none', marginTop:'9px'}}>
                  <option value="" disabled >Choose your City</option>
                  <option value="en">San Diego</option>
                  <option value="es">San Francisco </option>
                  <option value="kr">Los Angeles </option>
                  <option value="kr">Oakland </option>
                  <option value="kr">Sacramento </option>
                  <option value="kr">San Jose </option>
                  <option value="kr">Beverly Hills </option>
                  <option value="kr">Santa Barbara  </option>
            </select>
       </div>     
    );
  }
}


export default connect(
  null,
  { loadLanguage }
) (CityDropdown)

