import React from 'react';
import { connect } from 'react-redux';
import {moveToSearchResult} from '../actions/agent';
import {FormattedMessage, FormattedDate} from 'react-intl';
import './Search.scss';


class Search extends React.Component {


  constructor(props) {
    super(props);
      this.state={
        value: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getQuery = this.getQuery.bind(this);
  }

  getQuery(event){

    const target = event.target;
    const value = target.value;
    let name = target.name.trim();

    this.setState({
      [name]: value
    })


  }


  handleSubmit(e){
    const {moveToSearchResult} = this.props;
    // console.log(moveToSearchResult);
    e.preventDefault();
    // console.log("CLICK");
    // console.log(this.state.language);
    // console.log(this.state.location);
    moveToSearchResult({location: this.state.location, language: this.state.language});
  }

  render() {
    return (
      <div>
        <form className="col s6" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
             <select name="location" value={option.value} onChange={this.getQuery}>
                 <option value="A">Anaheim</option>
                 <option value="SD">San Diego</option>
                 <option value="SF">San Francisco</option>
                 <option value="PA">Palo Alto</option>
                 <option value="SM">Santa Monica </option>
                 <option value="S">Sacramento</option>
                 <option value="M">Malibu</option>
                 <option value="SB">Santa Barbara</option>
                 <option value="SJ">San Jose</option>
                 <option value="O">Oakland</option>
                 <option value="BH">Beverly Hills"</option>
                 <option value="I">Irvine</option>
                  <option value="M">Monterey</option>
                  <option value="LB">Long Beach</option>
                </select>
                <label htmlFor="by_location"><i className="material-icons">search</i>
                 <FormattedMessage id="app.search.location" />
                </label>
            </div>

               <select name="languages" value={option.value} onChange={this.getQuery}>
                 <option value="A">Korean</option>
                 <option value="SD">Chinese</option>
                 <option value="SF">Spanish</option>
                 <option value="PA">Palo Alto</option>
                 <option value="SM">Hindi </option>
                 <option value="S">Sacramento</option>
                 <option value="M">Bengali</option>
                 <option value="SB">Punjabi</option>
                 <option value="SJ">Telgu</option>
                 <option value="O">Arabic</option>
                 <option value="BH">German"</option>
                 <option value="I">Russian</option>
                  <option value="M">Indonesian</option>
                  <option value="LB"> Portuguese</option>
                  <option value="LB"> English</option>
                </select>
                <label htmlFor="by_languages"><i className="material-icons">search</i>
                 <FormattedMessage id="app.search.languages" />
                </label>
            
                <label htmlFor="by_languages"><i className="material-icons">languages_on</i>
                  <FormattedMessage id="app.search.languages" />
                </label>
            </div>


          
        <button 
          className="btn waves-effect waves-light themeButton" 
          type="submit" 
          >
          <FormattedMessage id="app.search.searchBtn" />
        </button><br/>
      </form>
    </div>
    );
  }
}

export default connect(
  null,
  { moveToSearchResult }
)(Search)



