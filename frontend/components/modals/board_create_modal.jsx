import React from 'react';
import Modal from 'react-modal-component';
import BoardCreateFormContainer from '../boards/board_create_form_container';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.8)',
    zIndex          : 10
  },
  content : {
    height          : '300px',
    display         : 'flex',
    justifyContent  : 'center',
    top             : '30%',
    left            : '35%',
    right           : '35%',
    border          : '1px solid #ccc',
    padding         : '10px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};

class BoardCreateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    return(
      <li className="create-board-item">
        <button className="board-create"
          onClick={this.openModal}>
          <div className="plus-icon">
            <img src={window.images.plus}/>
          </div>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Board Create Modal">

          <BoardCreateFormContainer closeModal={this.closeModal} />
        </Modal>
      </li>
    );
  }
}

export default BoardCreateModal;
