/**
 * @flow
 */

// アーティストの型
export type Artist = {
  artistId: number,
  artistName: string,
}

// クライアント側で保持するstateの型
export type ArtistSearchState = {
  loadingState: boolean,
  artistList: Array<Artist>,
  totalCount: number,
  keyword: string,
};

// APIからの返却型
export type ArtistSearchResponse = {
  artistList: Array<Artist>,
  totalCount: number,
};

