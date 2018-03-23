import React from 'react';
import { Container, Label } from 'native-base';
import { View, ScrollView } from 'react-native';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import UserSummary from '../../molcules/UserSummary/UserSummary';
import GoodsSum from '../../molcules/GoodsSum/GoodsSum';
import Line from '../../atoms/Line/Line';
import styles from './AskingGoodsConfirmPageStyles';

function GoodsConfirmList({ goodsNames, goodsPrices }) {
  const goods = Object.keys(goodsNames).map((index) => {
    return {
      name: goodsNames[index].name,
      price: goodsPrices[index].price,
    };
  });
  return goods.map((item) => {
    return (
      <View
        key={item.name}
        style={styles.listItemContainer}
      >
        <View style={styles.goodsContainer}>
          <Label style={styles.goodsLabel}>グッズ名</Label>
          <Label style={styles.goodsText}>{item.name}</Label>
        </View>
        <View style={styles.goodsContainer}>
          <Label style={styles.goodsLabel}>価格</Label>
          <Label style={styles.goodsText}>{item.price}円</Label>
        </View>
      </View>
    );
  });
}

function AskingGoodsConfirmPage(props) {
  const {
    navigation,
    dispatch,
    goodsNames,
    goodsPrices,
  } = props;
  const { userSummary } = navigation.state.params;
  return (
    <Container style={styles.container}>
      <SectionHeader
        navigation={navigation}
        title="依頼情報確認"
      />
      <Line />
      <ScrollView>
        <UserSummary
          userSummary={userSummary}
        />
        <GoodsConfirmList
          goodsNames={goodsNames}
          goodsPrices={goodsPrices}
        />
      </ScrollView>
      <View style={styles.dividerLine} />
      <GoodsSum
        buttonLabel="依頼する"
        goodsPrices={goodsPrices}
      />
    </Container>
  );
}

export default AskingGoodsConfirmPage;
