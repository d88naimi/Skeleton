import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {FormattedMessage, FormattedDate} from 'react-intl';
const Rating = require('react-rating');


export default class Agents extends React.Component {


  constructor(props) {
    super(props);
    // console.log(this.props);
  }


  render() {
    const {agent, selectedLang} = this.props;
    return (     
      <div className="col s12 m6 l4 xl3 center-align cardContainer">
        <div className="agentCard">
        <img className="resultPhoto" src={agent.photoURL} alt="agent resut AmericanLife"></img>
        <div className="center-align">
          <h4 className="flow-text">{agent.name}</h4>
          {agent.avgRate !== 0 &&<Rating
            className="resultStars"
            empty="fa fa-star-o"
            full={['fa fa-star rateColor']}
            fractions={2}
            initialRate={agent.avgRate}
            readonly={true}
          /> }
          {agent.avgRate === 0 && <p>No Rating</p>}
          <hr/>
          <p className=" grey-text text-darken-4"><b>{agent.location}</b></p>
          <hr/>
          {agent.languages.map( (lang,index)=>{
            return <p key={index} style={{color: selectedLang === lang ? 'red' : 'inherit'}}> - {lang}</p>
          })}
          <Link className="btn langButton" to={'/agents/' + agent._id}>MORE</Link>
          <br/>
        </div>
        </div>
      </div>

    );
  }
}




        // <ul>
        //      <li><em>{this.props.email}</em></li>
        //       <li><em>{this.props.phone}</em></li>            
        //       <li><em>{this.props.phone}</em></li> 
        //       {/*<li><em>{this.props.avgRate}</em></li>*/}           
        //       <Link to={'/agents/' + this.props.id}>TO AGENT DETAILS</Link> 
        //       <li><Rating
        //       empty="fa fa-star-o fa-2x"
        //       full="fa fa-star fa-2x" /></li>
        // </ul>