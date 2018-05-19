/**
 * @flow
 */
import { handleActions } from 'redux-actions';
import { SEARCH_ARTIST, UPDATE_KEYWORD } from './../actions/artistActions';
import type { ArtistSearchState, ArtistSearchResponse } from '../../types/artistTypes';

const initialState: ArtistSearchState = {
  loadingState: false,
  totalCount: 0,
  artistList: [],
  keyword: '',
};

const artistSearchReducers = handleActions({
  [SEARCH_ARTIST.loading]: state => ({
    ...state,
    loadingState: true,
  }),
  [SEARCH_ARTIST.success]: (state, { payload }: { payload: ArtistSearchResponse }) => ({
    ...state,
    loadingState: false,
    artistList: payload.artistList,
    totalCount: payload.totalCount,
  }),
  [SEARCH_ARTIST.failed]: state => ({
    ...state,
    loadingState: false,
  }),
  [UPDATE_KEYWORD]: (state, { payload }) => ({
    ...state,
    keyword: payload,
  }),
}, initialState);

export default artistSearchReducers;
