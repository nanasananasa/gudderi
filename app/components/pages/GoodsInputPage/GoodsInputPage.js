import React from 'react';
import { Container, Text, Thumbnail } from 'native-base';
import { View } from 'react-native';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import Line from '../../atoms/Line/Line';
import GoodsInputForm from '../../organisms/GoodsInputForm/GoodsInputForm';
import { inputGoodsName, inputGoodsPrice, addGoodsForm } from '../../../redux/actions/eventActions';
import styles from './GoodsInputPageStyles';

function GoodsInputPage(props) {
  const {
    navigation,
    dispatch,
    goodsFormSize,
    goodsNames,
    goodsPrices,
  } = props;
  //TODO: フォーム以外の部分は再レンダリングさせないようにする
  const { userSummary } = navigation.state.params;
  return (
    <Container style={styles.container}>
      <SectionHeader
        navigation={navigation}
        title="グッズ入力"
      />
      <Line />
      <View style={styles.userSummaryContainer}>
        <Thumbnail
          large
          source={{ uri: userSummary.userImageUrl }}
        />
        <Text style={styles.userName}>{`${userSummary.nickName}さん ${userSummary.prefecture}`}</Text>
      </View>
      <GoodsInputForm
        goodsFormSize={goodsFormSize}
        onClickAddButton={() => {
          dispatch(addGoodsForm(goodsFormSize));
        }}
        onChangeGoodsName={(id, name) => {
          if (!name || name.length < 0) {
            return;
          }
          dispatch(inputGoodsName(id, name));
        }}
        onChangeGoodsPrice={(id, price) => {
          if (!price || price.length < 0) {
            return;
          }
          dispatch(inputGoodsPrice(id, price));
        }}
      />
    </Container>
  );
}

export default GoodsInputPage;
