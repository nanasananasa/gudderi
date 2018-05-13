export const FETCH_LIVE_LIST = 'FETCH_LIVE_LIST';
export const FETCH_PARTICIPANTS_LIST = 'FETCH_PARTICIPANTS_LIST';
export const INPUT_GOODS_NAME = 'INPUT_GOODS_NAME';
export const INPUT_GOODS_PRICE = 'INPUT_GOODS_PRICE';
export const ADD_GOODS_FORM = 'ADD_GOODS_FORM';

export const LIVE_SORT_KEY_DATE = 1;
export const LIVE_SORT_KEY_POPULAR = 2;

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

export const fetchLiveList = (artistId, sortKey) => {
  //TODO: 通信しにいく
  if (sortKey === LIVE_SORT_KEY_DATE) {
    return ({
      type: FETCH_LIVE_LIST,
      payload: {
        liveSearchOrderByDate: {
          artistId,
          sortKey,
          artistName: '嵐',
          results: [
            {
              id: 1,
              liveName: 'ARASHI LIVE TOUR 2017-2018 「kirakira」',
              liveDate: '5/1 - 5/3',
              livePlace: '北海道',
            },
            {
              id: 2,
              liveName: 'ARASHI LIVE TOUR 2017-2018 「kirakira」',
              liveDate: '5/1 - 5/3',
              livePlace: '東京',
            },
            {
              id: 3,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '千葉',
            },
            {
              id: 4,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '名古屋',
            },
            {
              id: 5,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '大阪',
            },
            {
              id: 6,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '名古屋',
            },
            {
              id: 7,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '大阪',
            },
            {
              id: 8,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '名古屋',
            },
            {
              id: 9,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '大阪',
            },
            {
              id: 10,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '名古屋',
            },
            {
              id: 11,
              liveName: '30周年記念ライブ',
              liveDate: '5/1 - 5/3',
              livePlace: '大阪',
            },
          ],
        },
      },
    });
  }
  return ({
    type: FETCH_LIVE_LIST,
    payload: {
      liveSearchOrderByPopular: {
        artistId,
        sortKey,
        artistName: '嵐',
        results: [
          {
            id: 1,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '北海道',
          },
          {
            id: 2,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '東京',
          },
          {
            id: 3,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '千葉',
          },
          {
            id: 4,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '名古屋',
          },
          {
            id: 5,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '大阪',
          },
        ],
      },
    },
  });
};
