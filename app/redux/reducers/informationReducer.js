import { handleActions } from 'redux-actions';
import { FETCH_INFORMATION } from './../actions/informationActions';

const initialState = {
  userInformation: {
    loadingState: false,
    informationList: [],
  },
};

const informationReducers = handleActions({
  [FETCH_INFORMATION.loading]: state => ({
    ...state,
    userInformation: {
      ...state.userInformation,
      loadingState: true,
    },
  }),
  [FETCH_INFORMATION.success]: (state, { payload }) => ({
    ...state,
    userInformation: {
      loadingState: false,
      informationList: payload.userInformation,
    },
  }),
  [FETCH_INFORMATION.failed]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default informationReducers;
