import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    const { pins, board, currentUser, user } = this.props;

    return (

      <section className="board-show-container">
        <div className="board-show-title">
          {board.title}
        </div>

        <div className="board-show-description">
          {board.description}
        </div>

        <div className="board-show-pin-count">
          {pins.length} pins
        </div>
      </section>
    );
  }
};

export default withRouter(BoardShow);
