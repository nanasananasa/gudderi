/**
 * @flow
 */

// ライブの型
export type Live = {
  artistId: number,
  liveScheduleId: number,
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
  currentPage: number,
};

// APIからの返却型
export type LiveListResponse = {
  liveList: Array<Live>,
  totalCount: number,
  currentPage: number,
};

