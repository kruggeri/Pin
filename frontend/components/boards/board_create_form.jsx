import React from 'react';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state).then( () => this.props.closeModal());
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <form className="board-form">
        <div className="board-form-header">
          <h2>Create board</h2>
            <button className="close-create-button" onClick={this.props.closeModal} >
              <h2>X</h2>
            </button>
        </div>

        <label>
          <h2 className="board-form-title">Title</h2>
          <div className="board-form-input">
            <input type="text"
                  placeholder="Like 'Places to Go' or 'Recipes to Make'"
                  onChange={this.update('title')}>
            </input>
          </div>
        </label>

        <label>
          <h2 className="board-form-description">Description</h2>
          <div className="board-form-input">
            <input type="text"
                placeholder="Description"
                onChange={this.update('description')}>
            </input>
          </div>

        </label>

        <div className="create-board-button-container">
          <button className="create-board-button" type="submit" onClick={this.handleSubmit}>
            <div>
              Create
            </div>
          </button>
        </div>

      </form>
    );
  }
}

export default BoardCreateForm
