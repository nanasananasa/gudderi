import React from 'react';
import { Button, Text } from 'native-base';
import { View } from 'react-native';
import styles from './GoodsSumStyles';

function GoodsSum({ buttonLabel, onPressButton, goodsPrices }) {
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
          if (!onPressButton) {
            return;
          }
          onPressButton();
        }}
        title={buttonLabel}
        style={styles.askButton}
      >
        <Text style={styles.askButtonText}>{buttonLabel}</Text>
      </Button>
    </View>
  );
}

export default GoodsSum;
