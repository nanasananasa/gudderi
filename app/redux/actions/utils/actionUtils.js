/**
 * @flow
 */

const loadingType = (type: string) => `${type}_LOADING`;
const successType = (type: string) => `${type}_SUCCESS`;
const failedType = (type: string) => `${type}_FAILED`;

/**
 * successとfailedとloadingを個別に定義させなくて済むように、
 * 通信時に必要なアクションタイプを作成する関数
 */
export const createActionType = (type: string) => {
  return {
    success: successType(type),
    failed: failedType(type),
    loading: loadingType(type),
  };
};

/**
 * actionオブジェクトを作成して返す
 */
export const createAction = (type: string, payload: any) => {
  if (!payload) {
    return {
      type,
    };
  }
  return {
    type,
    payload,
  };
};
