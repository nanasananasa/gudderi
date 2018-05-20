/**
 * @flow
 */
import axios from '../../axios/axios';
import {
  createAction,
  createActionType,
} from './utils/actionUtils';
import type { LiveListState } from '../../types/liveTypes';

export const FETCH_LIVE_LIST = createActionType('FETCH_LIVE_LIST');
export const FETCH_MORE_LIVE_LIST = createActionType('FETCH_MORE_LIVE_LIST');

/**
 * 最初のページ読み込み用のAction
 * @param artistId
 * @returns {function(Function)}
 */
export const fetchInitialLiveList = (artistId: number) => {
  return (dispatch: Function) => {
    dispatch(createAction(FETCH_LIVE_LIST.loading));
    axios.get(`live/${artistId}`)
      .then((response) => {
        dispatch(createAction(FETCH_LIVE_LIST.success, response.data));
      })
      .catch(() => {
        //TODO: エラーハンドリング
        dispatch(createAction(FETCH_LIVE_LIST.failed));
      });
  };
};

/**
 * 追加取得用のAction
 * @param artistId
 * @returns {function(Function, Function)}
 */
export const fetchMoreLiveList = (artistId: number) => {
  return (dispatch: Function, getState: Function) => {
    const { liveList }: { liveList: LiveListState } = getState();
    // 読み込むデータがもうない場合は何もしない
    if (liveList.liveList.length >= liveList.totalCount) {
      return;
    }

    dispatch(createAction(FETCH_MORE_LIVE_LIST.loading));
    axios.get(`live/${artistId}?page=${liveList.currentPage + 1}`)
      .then((response) => {
        dispatch(createAction(FETCH_MORE_LIVE_LIST.success, response.data));
      })
      .catch(() => {
        //TODO: エラーハンドリング
        dispatch(createAction(FETCH_MORE_LIVE_LIST.failed));
      });
  };
};
