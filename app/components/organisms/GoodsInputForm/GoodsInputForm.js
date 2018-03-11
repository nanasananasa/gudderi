import React from 'react';
import { ScrollView } from 'react-native';
import { Icon, Button } from 'native-base';
import GoodsInput from '../../molcules/GoodsInput/GoodsInput';
import styles from './GoodsInputFormStyles';

function Form({ goodsFormSize, onChangeGoodsName, onChangeGoodsPrice }) {
  return Array.from(Array(goodsFormSize).keys()).map((index) => {
    return (
      <GoodsInput
        key={index}
        id={index}
        style={styles.formStyle}
        onChangeGoodsName={onChangeGoodsName}
        onChangeGoodsPrice={onChangeGoodsPrice}
      />
    );
  });
}

function GoodsInputForm(props) {
  const {
    goodsFormSize,
    onChangeGoodsName,
    onChangeGoodsPrice,
    onClickAddButton,
  } = props;
  return (
    <ScrollView style={styles.container}>
      <Form
        goodsFormSize={goodsFormSize}
        onChangeGoodsPrice={onChangeGoodsPrice}
        onChangeGoodsName={onChangeGoodsName}
      />
      <Button
        title=""
        transparent
        onPress={() => {
          if (!onClickAddButton) {
            return;
          }
          onClickAddButton();
        }}
      >
        <Icon
          active
          style={styles.addButton}
          name="ios-add-circle-outline"
        />
      </Button>
    </ScrollView>
  );
}

export default GoodsInputForm;
