import { BOARD_REQUEST_REFRESH, BOARD_REQUEST_LIST,  BOARD_REQUEST_CLEAR } from '../constants/board';

const initialState = {
  data: [],
  page: 1,
  total_count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BOARD_REQUEST_REFRESH:
      return {
        ...action.data,
        page: state.page,
      }
    case BOARD_REQUEST_LIST:
      return {
        ...action.data,
      }
    case BOARD_REQUEST_CLEAR:
      return {
        ...initialState
      }
    default:
      return state;
  }
}
