import React from 'react';
import { connect } from 'react-redux';
import {getAgentsNearby} from '../helpers/agent';
import {FormattedMessage, FormattedDate} from 'react-intl';
import './Search.scss';

function mapStateToProps(state) {
  return {

  };
}

export class Search extends React.Component {


  constructor(props) {
    super(props);
    this.state={
      city:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getQuery = this.getQuery.bind(this);
  }

  getQuery(event){

    let query = event.target.value.trim();

      this.setState({
        city: query
      });

      event.target.reset();
  }


  handleSubmit(e){

    e.preventDefault();

  }

  render() {
    return (
      <div>
        <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input type="text" className="validate" onChange={this.getQuery}/>
              <label htmlFor="last_name"><FormattedMessage id="app.search.search" /> <i className="material-icons">search</i></label>
          </div>
        </div>
        <button className="btn waves-effect waves-light themeButton" type="submit" name="action" onSubmit={this.handleSubmit}>
        <FormattedMessage id="app.search.searchBtn" />
            <i className="material-icons right"></i>
        </button><br/>
      </form>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Search)
