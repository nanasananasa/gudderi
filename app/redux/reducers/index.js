import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import informationReducer from './informationReducer';

const reducers = combineReducers({
  event: eventReducer,
  modal: modalReducer,
  information: informationReducer,
});
export default reducers;
