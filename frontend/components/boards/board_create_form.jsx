import React from "react";

const BoardFormHeader = ({closeModal}) => (
  <div className="board-form-header">
    <h2>Create board</h2>
    <button className="close-create-button" onClick={closeModal}>
      <h2>X</h2>
    </button>
  </div>
);

const BoardFormTitleInput = ({onChange}) => (
  <label>
    <h2 className="board-form-title">Title</h2>
    <div className="board-form-input">
      <input type="text"
        placeholder="Like 'Places to Go' or 'Recipes to Make'"
        onChange={onChange}>
      </input>
    </div>
  </label>
);

const BoardFormDescriptionInput = ({onChange}) => (
  <label>
    <h2 className="board-form-description">Description</h2>
    <div className="board-form-input">
      <input type="text"
        placeholder="Description"
        onChange={onChange}>
      </input>
    </div>
  </label>
);

const CreateBoardButton = () => (
  <div className="create-board-button-container">
    <button className="create-board-button" type="submit">
      <div>Create</div>
    </button>
  </div>
);

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: "", description: "",}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state).then(() => this.props.closeModal());
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <form className="board-form" onSubmit={this.handleSubmit}>
        <BoardFormHeader closeModal={this.props.closeModal} />
        <BoardFormTitleInput onChange={this.update("title")} />
        <BoardFormDescriptionInput onChange={this.update("description")} />
        <CreateBoardButton />
      </form>
    );
  }
}

export default BoardCreateForm
