import { BOARD_REQUEST_REFRESH, BOARD_REQUEST_LIST,  BOARD_REQUEST_CLEAR } from '../constants/board';
import { bulletin } from '../../api';

function boardRefresh(data) {
  return { type: BOARD_REQUEST_REFRESH, data };
}

function boardList(data) {
  return { type: BOARD_REQUEST_LIST, data }
}
function boardClear(data) {
  return { type: BOARD_REQUEST_CLEAR };
}

export function boardRead(obj) {
  return (dispatch, getState) => {
    const obj1 = bulletin.read(obj);
    const data = Object.assign({}, obj, obj1);
    dispatch(boardList(data))
  };
}

export function boardCreate(data) {
  return (dispatch, getState) => {
    const { page } = getState().board;
    let storage = bulletin.create({ data, page });
    dispatch(boardRefresh(storage))
  };
}

export function boardAdd(data) {
  return (dispatch, getState) => {
    let storage = bulletin.create(data);
    dispatch(boardRefresh(storage))
  };
}

export function boardDelete(id) {
  return (dispatch, getState) => {
    const { page } = getState().board;
    let storage = bulletin.delete({ id, page });
    dispatch(boardRefresh(storage))
  };
}
