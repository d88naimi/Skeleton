import React from 'react';
import { connect } from 'react-redux';
import { selectAgent } from '../actions/agent'
import {getSelectedAgent} from '../reducers';
import AgentComment from './AgentComment';
import AgentSingle from './AgentSingle';
import './Agent.scss';

class AgentDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      myArray:['comment is fdslfkhasf', 'another comment fdhsfjhasdkjhf a']
    }
    console.log(this.props);
    const { selectAgent } = this.props;
    const id = this.props.match.params.id;
    selectAgent(id);
    this.renderAgent = this.renderAgent.bind(this);
  }

  renderAgent(){
    return(
      <div className="row">
        <AgentSingle className="col s12 m3 l3"
          name={agent.name}
          rating ={agent.avgRate}
          email={agent.email}
          phone={agent.phone}
          language={agent.languages.toString()}
          description={agent.text}
        />
          <div className="col s12 m9 l9">
           {agent.comments.map( (comment,index)=>{
              return <AgentComment key={index} comment={comment}/>
           })}
          </div>
        </div>
      )
  }
          

  render() {

    const {agent} = this.props;

    return (
      <div className="container themeAgent row">
          <h5>Agent Details</h5>
          <hr/>
        {agent && this.renderAgent()}

                
                <AgentSingle
                  name="Agent Name"
                  photo="https://s3.amazonaws.com/whisperinvest-images/default.png"
                  rating ="4.5"
                  email="email@email.com"
                  phone="6584905435"
                  language="English"
                  description="faflkdshfl hjksah gkjhakj kjashkj ghkjdfhgh knkdljfhg kafdkjghk dfavbv kjfvkjfk"
                />
                  <div className="col s12 m9 l9 container">
                     {this.state.myArray.map( (comment,index)=>{
                        return <AgentComment key={index} comment={comment}/>
                     })}
                  </div>

                  <div className="col s12 m9 l9 container">
                    <form>
                            <div>
                              <div className="input-field">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                <label htmlFor="icon_prefix2">Write a Comment</label>
                              </div>
                            </div>
                      <button className="btn themeButton" type='button' >Send</button>
                    </form>
                  </div>

              

      </div>
    );

  }
}

export default connect(
  state => ({agent: getSelectedAgent(state)}),
  { selectAgent }
)(AgentDetail);