import React from 'react';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state);
    this.props.closeModal();
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <form className="board-form">
        <h2>Create board</h2>

        <label>
          <h2 className="board-form-title">Title</h2>
          <input type="text"
              placeholder="Like 'Places to Go' or 'Recipes to Make'"
              onChange={this.update('title')}>
          </input>
        </label>

        <label>
          <h2 className="board-form-description">Description</h2>
            <input type="text"
                placeholder="Description"
                onChnage={this.update('description')}>
            </input>
        </label>

        <input type="submit" onClick={this.handleSubmit}></input>
      </form>
    );
  }
}

export default BoardCreateForm
