import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Label, Icon } from 'native-base';
import styles from './GoodsInputStyles';

function GoodsInput({ id, onChangeGoodsName, onChangeGoodsPrice }) {
  return (
    <View>
      <View style={styles.goodsContainer}>
        <Label style={styles.goodsLabel}>グッズ</Label>
        <TextInput
          numberOfLines={1}
          style={styles.goodsInput}
          onChangeText={(name) => {
            if (!onChangeGoodsName) {
              return;
            }
            onChangeGoodsName(id, name);
          }}
        />
        <Button
          title=""
          style={styles.goodsIcon}
          transparent
          onPress={() => {}}
        >
          <Icon active name="camera" />
        </Button>
      </View>
      <View style={styles.priceContainer}>
        <Label style={styles.priceLabel}>価格</Label>
        <TextInput
          numberOfLines={1}
          keyboardType="numeric"
          style={styles.priceInput}
          onChangeText={(price) => {
            if (!onChangeGoodsPrice) {
              return;
            }
            onChangeGoodsPrice(id, price);
          }}
        />
        <Text style={styles.priceUnitLabel}>円</Text>
      </View>
    </View>
  );
}

export default GoodsInput;
