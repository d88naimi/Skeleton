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
    console.log(moveToSearchResult);
    e.preventDefault();
    console.log("CLICK");
    console.log(this.state.language);
    console.log(this.state.location);
    moveToSearchResult({location: this.state.location, language: this.state.language});
  }

  render() {
    return (
      <div>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="language"
                type="text" 
                className="validate" 
                onChange={this.getQuery}
                />
                <label htmlFor="by_language"><i className="material-icons">search</i>
                 <FormattedMessage id="app.search.language" />
                </label>
            </div>

            <div className="input-field col s6">
              <input 
                name="location"
                type="text" 
                className="validate" 
                onChange={this.getQuery}
                />
                <label htmlFor="by_location"><i className="material-icons">location_on</i>
                  <FormattedMessage id="app.search.location" />
                </label>
            </div>


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
