import React from "react";
import './Agent.scss';

class Agent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOn: false};

    // This binding is necessary to make `this` work in the callback
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(){
    
  }

render(){
  return(
  <div  className="agent ">
    <div className="row">
      <div className="col s12">
        <div className="row">

          <div className="agent-bio col s5 blue lighten-5">
            <div className="card-panel grey lighten-5 z-depth-1">

              <div className="row valign-wrapper">

                <div className="col s6">
                  <img className="circle responsive-img" src="" alt="Agent {user.name} Profile image" />
                </div>

                <div className="col s5">
                  <div className="agent-info section">
                    <h4>Sample Agent</h4>
                    <div className="agent-title">
                      Sample Title
                    </div>
                    <div className="agent-location section">
                      <h4>Locations</h4>
                      Los Angeles | Chicago | New York
                    </div>
                  </div>
                </div>

                {/* if logged in edit button should show*/}
                <div className="col s1">
                  <div className="edit bio">
                    <a
                     href="#"
                     onClick={this._handleClick}>
                      <i className="small material-icons">mode_edit</i>
                    </a>
                  </div>
                </div>

              </div>

              <div className="row valign-wrapper">

                <div className="agent-about col s12 section">
                  <h4>About Sample Agent</h4>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>

              </div>

            </div>
          </div>

          <div className="agent-specifics col s5 blue lighten-5">
            <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">

                <div className="agent-services col s11 section">
                  <h4>My Services</h4>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aliquam tincidunt mauris eu risus.
                    Vestibulum auctor dapibus neque.
                    Nunc dignissim risus id metus.
                    Cras ornare tristique elit.
                    Vivamus vestibulum nulla nec ante.
                    Praesent placerat risus quis eros.
                    Fusce pellentesque suscipit nibh.
                    Integer vitae libero ac risus egestas placerat.
                    Vestibulum commodo felis quis tortor.
                    Ut aliquam sollicitudin leo.
                    Cras iaculis ultricies nulla.
                    Donec quis dui at dolor tempor interdum.
                    Vivamus molestie gravida turpis.
                    Fusce lobortis lorem at ipsum semper sagittis.
                    Nam convallis pellentesque nisl.
                    Integer malesuada commodo nulla.
                </div>

              {/* if logged in edit button should show*/}
              <div className="col s1">
                <div className="edit specifics">
                  <a href="#"><i className="small material-icons">mode_edit</i></a>
                </div>
              </div>

              </div>

              <div className="row valign-wrapper">

                <div className="agent-languages col s12 section">
                  <h4>Languages</h4>
                    Korean | Spanish | English
                </div>
              </div>

              <div className="row valign-wrapper">

                <div className="agent-certifications col s12 section">
                  <h4>Certifications</h4>
                   Realtor License#<a href="#">CA00000</a><br/>
                   Certified Interpreter License#<a herf="#">L0000000</a><br/>
                </div>

              </div>
            </div>

          </div>

          <div className="opportunity col s2 blue lighten-2">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                 <div className="col s12">

                    <div className="employment-opportunity section">
                      <h4>Join Us!</h4>
                      Want to have unlimited earning potential and enjoy the perks of an amazing company culture? Join our team.

                    </div>

                 </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
  )
}
}

export default Agent;

