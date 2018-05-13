/**
 * @flow
 */
import axios from '../../axios/axios';
import {
  createAction,
  createActionType,
} from './utils/actionUtils';
import type { ArtistSearchState } from '../../types/artistTypes';

export const SEARCH_ARTIST = createActionType('SEARCH_ARTIST');

/**
 * TODO:
 * 検索ボタンによる検索とテキスト補完による検索を分ける
 * loadingなら通信しない
 * 最後に通信してから500ms以内は通信しない
 */
export const searchArtist = (keyword: string) => {
  return (dispatch, getState) => {
    if (!keyword || keyword === '') {
      dispatch(createAction(SEARCH_ARTIST.success, {
        totalCount: 0,
        artistList: [],
      }));
      return;
    }

    const {
      artistSearch,
    }: { artistSearch: ArtistSearchState } = getState();
    if (artistSearch.loading) {
      // すでに検索中の場合は新たに検索させない
      return;
    }
    dispatch(createAction(SEARCH_ARTIST.loading));
    axios.get('artists', {
      params: {
        keyword,
      },
    }).then((response) => {
      dispatch(createAction(SEARCH_ARTIST.success, response.data));
    }).catch(() => {
      dispatch(createAction(SEARCH_ARTIST.failed));
    });
  };
};
