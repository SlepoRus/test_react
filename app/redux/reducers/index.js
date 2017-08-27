import { combineReducers } from 'redux';
import board from './board';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default combineReducers({
  board,
});
