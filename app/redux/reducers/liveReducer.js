/**
 * @flow
 */
import { handleActions } from 'redux-actions';
import { FETCH_LIVE_LIST, FETCH_MORE_LIVE_LIST } from './../actions/liveActions';
import type {
  LiveListState,
  LiveListResponse,
} from '../../types/liveTypes';

const initialState: LiveListState = {
  loadingState: false,
  moreLoadingState: false,
  totalCount: 0,
  liveList: [],
  currentPage: 0,
};

const liveListReducers = handleActions({
  [FETCH_LIVE_LIST.loading]: state => ({
    ...state,
    loadingState: true,
    totalCount: 0,
    liveList: [],
    currentPage: 0,
  }),
  [FETCH_LIVE_LIST.success]: (state, { payload }: { payload: LiveListResponse }) => ({
    ...state,
    loadingState: false,
    liveList: payload.liveList,
    totalCount: payload.totalCount,
    currentPage: payload.currentPage,
  }),
  [FETCH_LIVE_LIST.failed]: state => ({
    ...state,
    loadingState: false,
    totalCount: 0,
    liveList: [],
    currentPage: 0,
  }),
  [FETCH_MORE_LIVE_LIST.loading]: state => ({
    ...state,
    moreLoadingState: true,
  }),
  [FETCH_MORE_LIVE_LIST.success]: (state, { payload }: { payload: LiveListResponse }) => ({
    ...state,
    moreLoadingState: false,
    liveList: state.liveList.concat(payload.liveList),
    totalCount: payload.totalCount,
    currentPage: payload.currentPage,
  }),
  [FETCH_MORE_LIVE_LIST.failed]: state => ({
    ...state,
    moreLoadingState: false,
  }),
}, initialState);

export default liveListReducers;
