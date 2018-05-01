/**
 * @flow
 */

export type UserInformation = {
  userInformationId: number,
  title: string,
  message: string,
  readFlag: boolean,
  createdAt: string
}

export type UserInfromationState = {
  loadingState: boolean,
  informationList: Array<UserInformation>,
  totalInformationCount: number,
};
