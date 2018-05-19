export const FETCH_LIVE_LIST = 'FETCH_LIVE_LIST';
export const FETCH_PARTICIPANTS_LIST = 'FETCH_PARTICIPANTS_LIST';
export const INPUT_GOODS_NAME = 'INPUT_GOODS_NAME';
export const INPUT_GOODS_PRICE = 'INPUT_GOODS_PRICE';
export const ADD_GOODS_FORM = 'ADD_GOODS_FORM';

export const addGoodsForm = () => {
  return ({
    type: ADD_GOODS_FORM,
  });
};

export const inputGoodsName = (id, name) => {
  return ({
    type: INPUT_GOODS_NAME,
    payload: {
      goodsNames: {
        [id]: {
          name,
        },
      },
    },
  });
};

export const inputGoodsPrice = (id, price) => {
  return ({
    type: INPUT_GOODS_PRICE,
    payload: {
      goodsPrices: {
        [id]: {
          price,
        },
      },
    },
  });
};

export const fetchParticipantsList = (liveId) => {
  //TODO: 通信しにいく
  return ({
    type: FETCH_PARTICIPANTS_LIST,
    payload: {
      participantsList: {
        liveId,
        results: [
          {
            userId: 1,
            nickName: 'N.M',
            prefecture: '東京',
            comment: '二宮くん推しです。',
            userImageUrl: 'https://image.pet-home.jp/user_file/2017/08/01/1036314_th320.jpg',
          },
          {
            userId: 2,
            nickName: 'N.M',
            prefecture: '東京',
            comment: '二宮くん推しです。',
            userImageUrl: 'https://image.pet-home.jp/user_file/2017/08/01/1036314_th320.jpg',
          },
          {
            userId: 3,
            nickName: 'N.M',
            prefecture: '東京',
            comment: '二宮くん推しです。',
            userImageUrl: 'https://image.pet-home.jp/user_file/2017/08/01/1036314_th320.jpg',
          },
          {
            userId: 4,
            nickName: 'N.M',
            prefecture: '東京',
            comment: '二宮くん推しです。',
            userImageUrl: 'https://image.pet-home.jp/user_file/2017/08/01/1036314_th320.jpg',
          },
        ],
      },
    },
  });
};

