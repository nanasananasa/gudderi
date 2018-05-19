import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import informationReducer from './informationReducer';
import artistSearchReducer from './artistSearchReducer';
import liveListReducer from './liveReducer';

const reducers = combineReducers({
  event: eventReducer,
  modal: modalReducer,
  information: informationReducer,
  artistSearch: artistSearchReducer,
  liveList: liveListReducer,
});
export default reducers;
