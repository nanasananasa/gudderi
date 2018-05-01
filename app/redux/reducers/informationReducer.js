/**
 * @flow
 */
import { handleActions } from 'redux-actions';
import { FETCH_INFORMATION } from './../actions/informationActions';
import type {
  UserInformationState,
  UserInformationResponse,
} from '../../types/userInformationTypes';

const initialState: { userInformation: UserInformationState } = {
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
  [FETCH_INFORMATION.success]: (state, { payload }: { payload: UserInformationResponse }) => ({
    ...state,
    userInformation: {
      loadingState: false,
      informationList: payload.userInformation,
      totalInformationCount: payload.totalInformationCount,
    },
  }),
  [FETCH_INFORMATION.failed]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default informationReducers;
