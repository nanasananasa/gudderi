/**
 * @flow
 */
import { handleActions } from 'redux-actions';
import { FETCH_INFORMATION, UPDATE_READ_FLAG } from './../actions/informationActions';
import type {
  UserInformationState,
  UserInformationResponse,
  UserInformation,
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
  [FETCH_INFORMATION.failed]: state => ({
    ...state,
    userInformation: {
      ...state.userInformation,
      loadingState: false,
    },
  }),

  [UPDATE_READ_FLAG.loading]: state => ({
    ...state,
    userInformation: {
      ...state.userInformation,
      loadingState: true,
    },
  }),
  [UPDATE_READ_FLAG.success]: (state, { payload }: { payload: Array<UserInformation> }) => ({
    ...state,
    userInformation: {
      ...state.userInformation,
      informationList: payload,
      loadingState: false,
    },
  }),
  [UPDATE_READ_FLAG.failed]: state => ({
    ...state,
    userInformation: {
      ...state.userInformation,
      loadingState: false,
    },
  }),
}, initialState);

export default informationReducers;
