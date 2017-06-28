import React from 'react';
import { Link } from 'react-router-dom';
import values from 'lodash/values';

const BoardsIndexItem = ({ board }) => {

  const boardPins = values(board.pins); 
  return (
    <Link to={`/boards/${board.id}`}>

      <ul className="board-index-item">
        <div className="board-index-grid">

          <li className="board-index-thumb">
              <img src={boardPins[0].image_src}></img>
          </li>

          <li className="board-index-thumb">
              <img src={boardPins[1].image_src}></img>
          </li>

          <li className="board-index-thumb">
              <img src={boardPins[2].image_src}></img>
          </li>
        </div>
      </ul>

      <figcaption className="board-index-item-title">
        {board.title}
      </figcaption>

    </Link>
  );
};

export default BoardsIndexItem;
