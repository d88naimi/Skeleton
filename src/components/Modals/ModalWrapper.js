import React from 'react';
import './ModalWrapper.scss';
 
 class ModalWrapper extends React.Component {
 
   render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop col s12 m8 blue lighten-5">
        <div className="modal card-panel grey lighten-5 z-depth-1">
         <h1> This is a Modal</h1>
          {this.props.children}

          <div className="footerModal">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};
 



export default ModalWrapper;