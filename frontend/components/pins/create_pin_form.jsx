import React from 'react';

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
    var formData = new FormData();
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
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.restult });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }



  render() {

    return(
        <form className="create-pin-form">
          <div className="create-pin-header">
            <h2>Create pin</h2>
            <button className="close-create-button" onClick={this.props.closeModal}>
              <h2>X</h2>
            </button>
          </div>

          <label className="title-box">
            <h2 className="pin-form-title">Title</h2>
            <div className="pin-form-input">
              <input type="text"
                    placeholder="Give it a name"
                    onChange={this.update('title')}>
              </input>
            </div>
          </label>

          <label className="description-box">
            <h2 className="pin-form-description">Descripion</h2>
              <div className="pin-form-input">
                <input type="text"
                    placeholder="Tell us about this Pin"
                    onChange={this.update('description')}>
                </input>
              </div>
          </label>

          <label className="credit-box">
            <h2 className="pin-form-credit">Image Credit</h2>
              <div className="pin-form-input">
                <input type="text"
                    placeholder="Credit this pin"
                    onChange={this.update('image_url')}>
                </input>
              </div>
          </label>



          <label className="upload-buttons">
            <div className="update-file">
              <input type="file" onChange={this.updateFile}/>
            </div>

            <div className="create-pin-button-container">
              <button className="create-pin-button" onClick={this.handleCreate}>Create Pin</button>
            </div>
          </label>

          <img src={this.state.imageUrl}/>
        </form>

    )
  }
}

export default PinCreateForm;
