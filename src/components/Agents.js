import React from 'react';
import photo from '../assets/images/cafe2.jpg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
var Rating = require('react-rating');


export default class Agents extends React.Component {


  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {
    const {agent} = this.props;
    return (

      
    <div className="card flexChild ">
    
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" img src={photo}></img>
    </div>
    <div className="card-content center-align">
      <h4 className="card-title  grey-text text-darken-4">{agent.name}</h4>
      <p className=" grey-text text-darken-4">{agent.city}</p>
      {agent.languages.map( (lang,index)=>{
        return <p key-={index}> -{lang}</p> 
      })}
      <span className="card-title activator grey-text text-darken-4"><Link to={'/agents/' + agent._id}> AGENT DETAILS</Link> </span>
 
      <Rating
              empty="fa fa-star-o fa-2x"
              full="fa fa-star fa-2x" />
    
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