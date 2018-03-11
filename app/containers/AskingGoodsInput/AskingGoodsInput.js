import React from 'react';
import { connect } from 'react-redux';
import GoodsInputPage from '../../components/pages/GoodsInputPage/GoodsInputPage';

function AskingGoodsInput(props) {
  return (
    <GoodsInputPage {...props} />
  );
}

export default connect(state => ({
  goodsNames: state.event.goodsNames,
  goodsPrices: state.event.goodsPrices,
  goodsFormSize: state.event.goodsFormSize,
}))(AskingGoodsInput);
