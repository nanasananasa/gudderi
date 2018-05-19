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
export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';


const clearSearchResults = (dispatch) => {
  dispatch(createAction(SEARCH_ARTIST.success, {
    totalCount: 0,
    artistList: [],
  }));
  dispatch(createAction(UPDATE_KEYWORD, ''));
};

const requestArtistSearch = (dispatch, getState) => {
  setTimeout(() => {
    const {
      artistSearch,
    }: { artistSearch: ArtistSearchState } = getState();
    axios.get('artists', {
      params: {
        keyword: artistSearch.searchResults.keyword,
      },
    }).then((response) => {
      dispatch(createAction(SEARCH_ARTIST.success, response.data));
    }).catch(() => {
      dispatch(createAction(SEARCH_ARTIST.failed));
    });
  }, 500);
};

/**
 * TODO:
 * 検索ボタンによる検索とテキスト補完による検索を分ける
 * キーワードだけ保存しておいて、500MS後に検索させる。
 * その間、キーワードは更新できる
 */
export const searchArtist = (keyword: string) => {
  return (dispatch, getState) => {
    // キーワード無しの場合は一時情報をクリアする
    if (!keyword || keyword === '') {
      clearSearchResults(dispatch);
      return;
    }
    dispatch(createAction(UPDATE_KEYWORD, keyword));

    const {
      artistSearch,
    }: { artistSearch: ArtistSearchState } = getState();
    // すでに検索中の場合は新たに検索させない
    if (artistSearch.loading) {
      return;
    }
    dispatch(createAction(SEARCH_ARTIST.loading));
    requestArtistSearch(dispatch, getState);
  };
};

