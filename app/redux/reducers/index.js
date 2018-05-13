import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import informationReducer from './informationReducer';
import artistSearchReducer from './artistSearchReducer';

const reducers = combineReducers({
  event: eventReducer,
  modal: modalReducer,
  information: informationReducer,
  artistSearch: artistSearchReducer,
});
export default reducers;
