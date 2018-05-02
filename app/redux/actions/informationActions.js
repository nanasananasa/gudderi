/**
 * @flow
 */
import axios from '../../axios/axios';
import {
  createAction,
  createActionType,
} from './utils/actionUtils';
import type { UserInformation, UserInformationState } from '../../types/userInformationTypes';

export const FETCH_INFORMATION = createActionType('FETCH_INFORMATION');
export const UPDATE_READ_FLAG = createActionType('UPDATE_READ_FLAG');

export const fetchInformation = () => {
  return (dispatch, getState) => {
    //TODO: ログインしているユーザ情報を取得する
    //TODO: ログインしていないユーザに対してはデフォルトのお知らせを入れる？
    // const { userInfo } = getState();
    const userInfo = { userId: 1 };
    dispatch(createAction(FETCH_INFORMATION.loading));
    axios.get(`information/${userInfo.userId}`)
      .then((response) => {
        dispatch(createAction(FETCH_INFORMATION.success, response.data));
      })
      .catch(() => {
        // お知らせは重要度の高い機能じゃないので失敗しても何もしない
        dispatch(createAction(FETCH_INFORMATION.failed));
      });
  };
};

export const updateReadFlag = (userInformationId) => {
  return (dispatch, getState) => {
    //TODO: ログインしているユーザ情報を取得する
    //TODO: ログインしていないユーザに対してはなにもさせない
    // const { userInfo } = getState();
    const userInfo = { userId: 1 };
    const { userInformation }: { userInformation:UserInformationState } = getState().information;
    dispatch(createAction(UPDATE_READ_FLAG.loading));
    axios.put(`information/${userInfo.userId}/${userInformationId}`)
      .then(() => {
        // stateも既読にする
        const result = userInformation.informationList.map((item): UserInformation => {
          if (item.userInformationId !== userInformationId) {
            return item;
          }
          return {
            ...item,
            readFlag: true,
          };
        });
        dispatch(createAction(UPDATE_READ_FLAG.success, result));
      })
      .catch(() => {
        // お知らせは重要度の高い機能じゃないので失敗しても何もしない
        dispatch(createAction(UPDATE_READ_FLAG.failed));
      });
  };
};
