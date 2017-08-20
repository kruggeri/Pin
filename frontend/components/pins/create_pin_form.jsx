import React from 'react';

const Header = ({closeModal}) => (
  <div className="create-pin-header">
    <h2>Create pin</h2>
    <button className="close-create-button" onClick={closeModal}>
      <h2>X</h2>
    </button>
  </div>
);

const TitleInput = ({onChange}) => (
  <label className="title-box">
    <h2 className="pin-form-title">Title</h2>
    <div className="pin-form-input">
      <input type="text"
        placeholder="Give it a name"
        onChange={onChange}>
      </input>
    </div>
  </label>
);

const DescriptionInput = ({onChange}) => (
  <label className="description-box">
    <h2 className="pin-form-description">Descripion</h2>
    <div className="pin-form-input">
      <input type="text"
        placeholder="Tell us about this Pin"
        onChange={onChange}>
      </input>
    </div>
  </label>
);

const CreditInput = ({onChange}) => (
  <label className="credit-box">
    <h2 className="pin-form-credit">Image Credit</h2>
    <div className="pin-form-input">
      <input type="text"
        placeholder="Credit this pin"
        onChange={onChange}>
      </input>
    </div>
  </label>
);

const UploadButtons = ({onChange, onClick}) => (
  <label className="upload-buttons">
    <div className="update-file">
      <input type="file" onChange={onChange} />
    </div>

    <div className="create-pin-button-container">
      <button className="create-pin-button" onClick={onClick}>Create Pin</button>
    </div>
  </label>
);

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      image_url: "",
      board_id: props.board.id,
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleCreate(e) {
    const formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[image]", this.state.imageFile);
    formData.append("pin[board_id]", this.state.board_id);
    formData.append("pin[image_url]", this.state.image_url);

    this.props.createPin(formData).then(() => this.props.closeModal());
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (() => {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }).bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    // TODO: add image_url, with CSS to show uploaded image
    // <img src={this.state.imageUrl} />
    return (
      <form className="create-pin-form">
        <Header closeModal={this.props.closeModal} />
        <TitleInput onChange={this.update('title')} />
        <DescriptionInput onChange={this.update('description')} />
        <CreditInput onChange={this.update('image_url')} />
        <UploadButtons onChange={this.updateFile} onClick={this.handleCreate} />
      </form>
    );
  }
}

export default PinCreateForm;
