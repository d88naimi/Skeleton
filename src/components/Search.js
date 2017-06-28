import React from 'react';
import { connect } from 'react-redux';
import {getAgentsNearby} from '../helpers/agent';
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

  }


  handleSubmit(e){

    e.preventDefault();

    getAgentsNearby(this.state.city).then(results=>{

      console.log("Search Results",results);

    });

  }

  render() {
    return (
      <div>
        <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input type="text" className="validate" onChange={this.getQuery}/>
              <label htmlFor="last_name">Search For Agents</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light themeButton" type="submit" name="action" onSubmit={this.handleSubmit}>Search
            <i className="material-icons right">search</i>
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
