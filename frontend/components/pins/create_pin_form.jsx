import React from 'react';

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      image_url: "",
      board_id: "",
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.update = this.update.bind(this);
  }

  handleCreate(e) {
    this.props.createPin(this.state).then(() => this.props.closeModal());
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  boardList() {
      const boards = this.props.currentUser.boards;
      const boardTitles = Object.keys(boards).map( title => {
        const boardId = boards[title];
        return (
        <li key={boardId} className="pin-save-board">
          <div>{title}</div>
          <div onClick={ (e) => { this.setState({board_id: boardId}); this.handleCreate(e); } } className="pin-save-final">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <div className="pin-save">Save</div>
          </div>
        </li>
        );
      });
      return boardNames;
  }

  render() {
    return(
        <form className="create-pin-form">
          <div className="create-pin-header">
            <h2>Create pin</h2>
            <button className="close-create-button">
              <h2>X</h2>
            </button>
          </div>

          <label>
            <h2 className="pin-form-title">Title</h2>
            <div className="pin-form-input">
              <input type="text"
                    placeholder="Give it a name'"
                    onChange={this.update('title')}>
              </input>
            </div>
          </label>

          <label>
            <h2 className="pin-form-description">Descripion</h2>
              <div className="pin-form-input">
                <input type="text"
                    placeholder="Tell us about this Pin"
                    onChange={this.update('description')}>
                </input>
              </div>
          </label>


          <input type="text" placeholder="Image URL"
            value={this.state.image}
            onChange={this.update('image')}
          />
          <input type="text" placeholder="https://..."
            value={this.state.url}
            onChange={this.update('url')}
          />
          <span id="urlError"></span>
          <br/>
          <textarea placeholder="Tell us about this pin..."
            value={this.state.description}
            onChange={this.update('description')}
          />
          <br/>
        </form>


        <br/>
        <ul>
          {this.boardList()}
        </ul>
      </div>
    )
  }
}

export default PinCreateForm;
