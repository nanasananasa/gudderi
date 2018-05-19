/**
 * @flow
 */

// ライブの型
export type Live = {
  artistId: number,
  liveId: number,
  liveName: string,
  livePlace: string,
  livePrefecture: string,
  liveDate: string,
}

// クライアント側で保持するstateの型
export type LiveListState = {
  loadingState: boolean,
  liveList: Array<Live>,
  totalCount: number,
};

// APIからの返却型
export type LiveListResponse = {
  liveList: Array<Live>,
  totalCount: number,
};

