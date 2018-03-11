import React from 'react';
import GoodsInput from '../../molcules/GoodsInput/GoodsInput';

function GoodsInputForm(props) {
  const { onChangeGoodsName, onChangeGoodsPrice } = props;
  return (
    <GoodsInput
      id={1}
      onChangeGoodsName={onChangeGoodsName}
      onChangeGoodsPrice={onChangeGoodsPrice}
    />
  );
}

export default GoodsInputForm;
