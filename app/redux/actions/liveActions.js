/**
 * @flow
 */
import axios from '../../axios/axios';
import {
  createAction,
  createActionType,
} from './utils/actionUtils';

export const FETCH_LIVE_LIST = createActionType('FETCH_LIVE_LIST');

export const fetchLiveList = (artistId: number, page = 0) => {
  return (dispatch: Function) => {
    dispatch(createAction(FETCH_LIVE_LIST.loading));
    axios.get(`live/${artistId}?page=${page}`)
      .then((response) => {
        dispatch(createAction(FETCH_LIVE_LIST.success, response.data));
      })
      .catch(() => {
        //TODO: エラーハンドリング
        dispatch(createAction(FETCH_LIVE_LIST.failed));
      });
  };
};
