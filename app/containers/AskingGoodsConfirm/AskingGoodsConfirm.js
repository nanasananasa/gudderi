import React from 'react';
import { connect } from 'react-redux';
import AskingGoodsConfirmPage from '../../components/pages/AskingGoodsConfirmPage/AskingGoodsConfirmPage';

function AskingGoodsConfirm(props) {
  return (
    <AskingGoodsConfirmPage {...props} />
  );
}

export default connect(state => ({
  goodsNames: state.event.goodsNames,
  goodsPrices: state.event.goodsPrices,
}))(AskingGoodsConfirm);
