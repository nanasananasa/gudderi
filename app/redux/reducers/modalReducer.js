import { handleActions } from 'redux-actions';
import {
  SHOW_REQUEST_CONFIRM_MODAL,
  CLOSE_REQUEST_CONFIRM_MODAL,
} from './../actions/modalActions';

const initialState = {
  modals: {
    visible: false,
    data: {},
  },
};

const modalReducer = handleActions({
  [SHOW_REQUEST_CONFIRM_MODAL]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [CLOSE_REQUEST_CONFIRM_MODAL]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default modalReducer;
