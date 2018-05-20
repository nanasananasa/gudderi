/**
 * @flow
 */
import { handleActions } from 'redux-actions';
import { FETCH_LIVE_LIST } from './../actions/liveActions';
import type {
  LiveListState,
  LiveListResponse,
} from '../../types/liveTypes';

const initialState: LiveListState = {
  loadingState: false,
  totalCount: 0,
  liveList: [],
  currentPage: 0,
};

const liveListReducers = handleActions({
  [FETCH_LIVE_LIST.loading]: state => ({
    ...state,
    loadingState: true,
  }),
  [FETCH_LIVE_LIST.success]: (state, { payload }: { payload: LiveListResponse }) => ({
    ...state,
    loadingState: false,
    liveList: state.liveList.concat(payload.liveList),
    totalCount: payload.totalCount,
    currentPage: payload.currentPage,
  }),
  [FETCH_LIVE_LIST.failed]: state => ({
    ...state,
    loadingState: false,
  }),
}, initialState);

export default liveListReducers;
