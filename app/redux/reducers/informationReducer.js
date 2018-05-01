/**
 * @flow
 */
import { handleActions } from 'redux-actions';
import { FETCH_INFORMATION } from './../actions/informationActions';
import type { UserInfromationState } from '../../types/userInformationTypes';

const initialState: { userInformation: UserInfromationState } = {
  userInformation: {
    loadingState: false,
    totalInformationCount: 0,
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
