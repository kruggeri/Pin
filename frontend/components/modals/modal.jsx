import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className="modal-root">
            <div className="modal-wrapper">
              <div className="close-modal" onClick={ () => this.props.close() }></div>
              <div className="modal-content">
                {this.props.component}
              </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Modal;
