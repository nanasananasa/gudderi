const loadingType = type => `${type}_LOADING`;
const successType = type => `${type}_SUCCESS`;
const failedType = type => `${type}_FAILED`;

/**
 * successとfailedとloadingを個別に定義させなくて済むように、
 * 通信時に必要なアクションタイプを作成する関数
 */
export const createActionType = (type) => {
  return {
    success: successType(type),
    failed: failedType(type),
    loading: loadingType(type),
  };
};

/**
 * actionオブジェクトを作成して返す
 */
export const createAction = (type, payload) => {
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
