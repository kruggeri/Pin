import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isOpen) {
      return <div></div>;
    }
    return (
      <div className="modal-root"><div className="modal-wrapper">
        <div className="close-modal" onClick={() => this.props.close()} />
        <div className="modal-content">{this.props.component}</div>
      </div></div>
    );
  }
}

export default Modal;
