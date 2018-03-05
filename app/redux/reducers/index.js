import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  event: eventReducer,
  modal: modalReducer,
});
export default reducers;
