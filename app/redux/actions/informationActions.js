import axios from '../../axios/axios';
import {
  createAction,
  createActionType,
} from './utils/actionUtils';

export const FETCH_INFORMATION = createActionType('FETCH_INFORMATION');

export const fetchInformation = () => {
  return (dispatch, getState) => {
    //TODO: ログインしているユーザ情報を取得する
    //TODO: ログインしていないユーザに対してはデフォルトのお知らせを入れる？
    // const { userInfo } = getState();
    const userInfo = { userId: 1 };
    dispatch(createAction(FETCH_INFORMATION.loading));
    axios.get(`information/${userInfo.userId}`)
      .then((response) => {
        dispatch(createAction(FETCH_INFORMATION.success, response.data.userInformation));
      })
      .catch((error) => {
        dispatch(createAction(FETCH_INFORMATION.failed, error));
      });
  };
};
