import React from 'react';
import { Container } from 'native-base';
import { View, ScrollView } from 'react-native';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import UserSummary from '../../molcules/UserSummary/UserSummary';
import GoodsSum from '../../molcules/GoodsSum/GoodsSum';
import Line from '../../atoms/Line/Line';
import styles from './AskingGoodsConfirmPageStyles';

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
      </ScrollView>
      <View style={styles.dividerLine} />
      <GoodsSum
        goodsNames={goodsNames}
        goodsPrices={goodsPrices}
      />
    </Container>
  );
}

export default AskingGoodsConfirmPage;
