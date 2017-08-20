import * as APIUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board: board,
});

export const removeBoard = (boardId) => ({
  type: DELETE_BOARD,
  boardId: boardId,
});

export const fetchBoard = (boardId) => (dispatch) => (
  APIUtil.fetchBoard(boardId)
    .then(board => dispatch(receiveBoard(board)))
);

export const createBoard = (board) => (dispatch) => (
  APIUtil.createBoard(board)
    .then(newBoard => dispatch(receiveBoard(newBoard)))
);

export const editBoard = (board) => (dispatch) => (
  APIUtil.updateBoard(board)
    .then(updatedBoard => dispatch(receiveBoard(updatedBoard)))
);

export const destroyBoard = (boardId) => (dispatch) => (
  APIUtil.destroyBoard(boardId)
    .then(() => dispatch(removeBoard(boardId)))
);
