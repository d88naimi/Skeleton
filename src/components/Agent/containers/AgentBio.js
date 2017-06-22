import React from 'react';
import ModalWrapper from "../../Modals/ModalWrapper";

class AgentBio extends React.Component {
    constructor(props) {
    super(props);
  {/*sets modal state to false, on pencil click will open to edit */}
    this.state = {isModalOpen: false};
  }
    _toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
    
  }

  render() {
    return (
          <div className="agent-bio col s8 blue lighten-5">
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
                     onClick={this._toggleModal}
                     >
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

           {/*modal, if pencil click open modal */}
            <ModalWrapper 
              show={this.state.isModalOpen}
              onClose={this._toggleModal}
            >
              Here's some content for the modal
            </ModalWrapper>

          </div>
    );
  }
}
export default AgentBio;
