/**
 * @flow
 */

// お知らせ情報の型
export type UserInformation = {
  userInformationId: number,
  title: string,
  message: string,
  readFlag: boolean,
  createdAt: string
}

// クライアント側で保持するstateの型
export type UserInformationState = {
  loadingState: boolean,
  informationList: Array<UserInformation>,
  totalInformationCount: number,
};

// APIからの返却型
export type UserInformationResponse = {
  totalInformationCount: number,
  userInformation: Array<UserInformation>,
};

