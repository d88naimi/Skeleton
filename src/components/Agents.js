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
    return (

      
    <div className="card col xs12 s12 m5 offset-m1 l3 xl3 offset-xl1 ">
    
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" img src={photo}></img>
    </div>
    <div className="card-content ">
      <span className="card-title activator grey-text text-darken-4">{this.props.name}</span>
      <span className="card-title activator grey-text text-darken-4">{this.props.city}</span>
      <span className="card-title activator grey-text text-darken-4">{this.props.languages.join('/')}</span>
      <span className="card-title activator grey-text text-darken-4"><Link to={'/agents/' + this.props.id}> AGENT DETAILS</Link> </span>
 
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