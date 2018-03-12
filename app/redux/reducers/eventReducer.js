import { handleActions } from 'redux-actions';
import {
  SEARCH_ARTIST,
  FETCH_LIVE_LIST,
  FETCH_PARTICIPANTS_LIST,
  INPUT_GOODS_NAME,
  INPUT_GOODS_PRICE,
  ADD_GOODS_FORM,
} from './../actions/eventActions';

const initialState = {
  artistSearch: {
    keyword: '',
    results: [],
  },
  goodsNames: {},
  goodsPrices: {},
  goodsFormSize: 1,
};

const eventReducer = handleActions({
  [SEARCH_ARTIST]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [FETCH_LIVE_LIST]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [FETCH_PARTICIPANTS_LIST]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [INPUT_GOODS_NAME]: (state, { payload }) => ({
    ...state,
    goodsNames: {
      ...state.goodsNames,
      ...payload.goodsNames,
    },
  }),
  [INPUT_GOODS_PRICE]: (state, { payload }) => ({
    ...state,
    goodsPrices: {
      ...state.goodsPrices,
      ...payload.goodsPrices,
    },
  }),
  [ADD_GOODS_FORM]: (state) => ({
    ...state,
    goodsFormSize: state.goodsFormSize + 1,
  }),
}, initialState);

export default eventReducer;
