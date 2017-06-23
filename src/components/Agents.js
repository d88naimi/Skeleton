import React from 'react';
import photo from '../assets/images/cafe.jpg';
const Agents = () => (

    <div className="row">
    <div className="col s4 m4">
        <div className="card ">
        
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={photo}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Agent David <i className="material-icons right">United States</i></span>
          <p><a href="#">United States</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
        </div>
      </div>
      </div>
    
       
      // <div className="photo-grid" >
      //   {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
      // </div>
    
   
);

export default Agents;


// function Agents ({agents}) => (
//   <div>
//     {agents.map(agent => <Agent something={agent}/>)} this.props.somehthing
//   </div>
// )

const agents = [
  {
    name: "Bill Gates",
    location: "San Francisco" ,
    languages: ["English","Spanish"]
  },
  {
    name: "Hyungwu Genius",
    location: "San Diego",
    languages: ["Korean", "Spanish"]
  },
  {
    name: "John Smith",
    location: "Los Angelos",
    languages: ["Korean", "Spanish"]
  },
  {
    name: "David Skeleton",
    location: "Los Angelos",
    languages: ["Korean", "Spanish"]
  },
  {
    name: "Cindy Chan",
    location: "Los Angelos",
    languages: ["Korean", "Chinese"]
  },
  {
    name: "Sarah Lee",
    location: "Palo Alto",
    languages: ["Japanese", "Spanish"]
  },
  {
    name: "Eric Song",
    location: "Los Angelos",
    languages: ["Italian", "Spanish"]
  },
  {
    name: "Java Script",
    location: "Los Angelos",
    languages: ["Persian", "Farsi"]
  },
  {
    name: "Eliza Funny",
    location: "San Diego",
    languages: ["Hebrew", "German"]
  },
  {
    name: "Marko Darko",
    location: "Anaheim",
    languages: ["Hebrew", "German"]
  },
  {
    name: "Pilar Humphrey ",
    location: "Sacramento",
    languages: ["Portuguese", "Swedish"]
  },
  {
    name: "Quinn Happy ",
    location: "San Jose",
    languages: ["Russian", "Turkish"]
  },
  {
    name: "Tara Sunny ",
    location: "Fresno",
    languages: ["French", "German"]
  },
  {
    name: "Wendy Sol ",
    location: "Oakland",
    languages: ["Arabic", "English"]
  },
  {
    name: "Erika Web ",
    location: "Fresno",
    languages: ["Japanese", "Mandarin"]
  },
  {
    name: "Stefen Awesome ",
    location: "Long Beach",
    languages: ["Hindi", "English"]
  },
  
  
]