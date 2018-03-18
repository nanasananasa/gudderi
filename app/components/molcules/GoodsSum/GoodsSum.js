import React from 'react';
import { Button, Text } from 'native-base';
import { View } from 'react-native';
import styles from './GoodsSumStyles';

function GoodsSum({ onPressConfirm, goodsNames, goodsPrices }) {
  const priceList = Object.values(goodsPrices).map((item) => {
    return item.price;
  });
  const sum = priceList.reduce((prev, next) => {
    return parseInt(prev, 10) + parseInt(next, 10);
  }, 0);
  return (
    <View style={styles.goodsSumContainer}>
      <Text style={styles.goodsSumText}>合計:{`${sum}`}円</Text>
      <Button
        onPress={() => {
          //TODO: validate & navigate
          if (!onPressConfirm) {
            return;
          }
          onPressConfirm();
        }}
        title="確認"
        style={styles.askButton}
      >
        <Text style={styles.askButtonText}>確認</Text>
      </Button>
    </View>
  );
}

export default GoodsSum;
