import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Label, Icon } from 'native-base';
import styles from './GoodsInputStyles';

function GoodsInput(props) {
  const {
    id,
    onChangeGoodsName,
    onChangeGoodsPrice,
    style,
  } = props;
  return (
    <View style={style}>
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
          style={styles.goodsIconButton}
          transparent
          onPress={() => {}}
        >
          <Icon
            active
            style={styles.goodsIcon}
            name="camera"
          />
        </Button>
      </View>
      <View style={styles.priceContainer}>
        <Label style={styles.priceLabel}>価格</Label>
        <TextInput
          numberOfLines={1}
          maxLength={5}
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
