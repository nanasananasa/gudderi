/**
 * @flow
 */
import { handleActions } from 'redux-actions';
import { SEARCH_ARTIST } from './../actions/artistActions';
import type { ArtistSearchState, ArtistSearchResponse } from '../../types/artistTypes';

const initialState: { searchResults: ArtistSearchState } = {
  searchResults: {
    loadingState: false,
    totalCount: 0,
    artistList: [],
  },
};

const artistSearchReducers = handleActions({
  [SEARCH_ARTIST.loading]: state => ({
    ...state,
    searchResults: {
      ...state.searchResults,
      loadingState: true,
    },
  }),
  [SEARCH_ARTIST.success]: (state, { payload }: { payload: ArtistSearchResponse }) => ({
    ...state,
    searchResults: {
      loadingState: false,
      artistList: payload.artistList,
      totalCount: payload.totalCount,
    },
  }),
  [SEARCH_ARTIST.failed]: state => ({
    ...state,
    searchResults: {
      ...state.searchResults,
      loadingState: false,
    },
  }),
}, initialState);

export default artistSearchReducers;
