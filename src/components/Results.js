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
    axios.get('/api/users/allAgents').then(res => res.data).then(
      res => {
        this.setState({agents: res});
        console.log(this.state);
      }
    )
  }

  render() {
    return (
      <div className="container row">
        {this.state && this.state.agents.map( (agent,index) =>{
            return <Agents 
            key={index} 
            role={agent.role}
            name={agent.name}
            languages={agent.languages }
            location={agent.location}
            email={agent.email}
            phone={agent.phone}
             text={agent.text}
            />
        })}
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Results);