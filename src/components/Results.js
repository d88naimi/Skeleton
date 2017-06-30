import React from 'react';
import photo from '../assets/images/cafe.jpg';
import Agents from './Agents';
import { connect } from 'react-redux';
import axios from 'axios';
function mapStateToProps(state) {
  return {

  };
}

export class Results extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/api/users/agents?location=LA').then(res => res.data).then(
      res => {
        this.setState({agents: res});
        console.log(this.state);
      }
    )
  }

  render() {
    return (
      <div className="container row">
        {agents.map( (agent,index) =>{
            return <Agents 
            key={index} 
            name={agent.name}
            languages={agent.languages }
            location= {agent.location}
            />
        })}
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Results)




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
    location: "Los Angeles",
    languages: ["Korean", "Spanish"]
  },
  {
    name: "David Skeleton",
    location: "Los Angeles",
    languages: ["Korean", "Spanish"]
  },
  {
    name: "Cindy Chan",
    location: "Los Angeles",
    languages: ["Korean", "Chinese"]
  },
  {
    name: "Sarah Lee",
    location: "Palo Alto",
    languages: ["Japanese", "Spanish"]
  },
  {
    name: "Eric Song",
    location: "Los Angeles",
    languages: ["Italian", "Spanish"]
  },
  {
    name: "Java Script",
    location: "Los Angeles",
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
    {
    name: "Stefen Awesome ",
    location: "Long Beach",
    languages: ["Hindi", "English"]
  },
    {
    name: "Stefen Awesome ",
    location: "Long Beach",
    languages: ["Hindi", "English"]
  }
  
  
]