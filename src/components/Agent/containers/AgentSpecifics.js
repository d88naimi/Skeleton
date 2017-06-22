import React from 'react';

export default class AgentSpecifics extends React.Component {

  render() {
    return (
		<div className="agent-specifics col s12 blue lighten-5">
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
                 {/*add onClick handler to edit specifics */}
                  <a><i className="small material-icons">mode_edit</i></a>
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
    );
  }
}
