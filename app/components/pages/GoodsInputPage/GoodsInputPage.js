import React from 'react';
import { Container } from 'native-base';
import { View, ScrollView } from 'react-native';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import Line from '../../atoms/Line/Line';
import GoodsInputForm from '../../organisms/GoodsInputForm/GoodsInputForm';
import UserSummary from '../../molcules/UserSummary/UserSummary';
import GoodsSum from '../../molcules/GoodsSum/GoodsSum';
import { inputGoodsName, inputGoodsPrice, addGoodsForm } from '../../../redux/actions/eventActions';
import styles from './GoodsInputPageStyles';

function GoodsForm({ goodsFormSize, dispatch }) {
  const onClickAddButton = () => {
    dispatch(addGoodsForm());
  };
  const onChangeGoodsName = (id, name) => {
    if (!name || name.length < 0) {
      return;
    }
    dispatch(inputGoodsName(id, name));
  };
  const onChangeGoodsPrice = (id, price) => {
    if (!price || price.length < 0) {
      dispatch(inputGoodsPrice(id, 0));
      return;
    }
    dispatch(inputGoodsPrice(id, price));
  };
  return (
    <GoodsInputForm
      goodsFormSize={goodsFormSize}
      onClickAddButton={onClickAddButton}
      onChangeGoodsName={onChangeGoodsName}
      onChangeGoodsPrice={onChangeGoodsPrice}
    />
  );
}

class GoodsInputPage extends React.Component {
  render() {
    const {
      navigation,
      dispatch,
      goodsFormSize,
      goodsNames,
      goodsPrices,
    } = this.props;
    //TODO: フォーム以外の部分は再レンダリングさせないようにする
    const { userSummary } = navigation.state.params;
    return (
      <Container style={styles.container}>
        <SectionHeader
          navigation={navigation}
          title="グッズ入力"
        />
        <Line />
        <ScrollView
          ref={(scrollView) => {
            this.scrollView = scrollView;
          }}
          onContentSizeChange={() => {
            // 追加されたときにスクロールさせる
            this.scrollView.scrollToEnd({ animated: false });
          }}
        >
          <UserSummary
            userSummary={userSummary}
          />
          <GoodsForm
            dispatch={dispatch}
            goodsFormSize={goodsFormSize}
          />
        </ScrollView>
        <View style={styles.dividerLine} />
        <GoodsSum
          onPressConfirm={() => {
            navigation.navigate('AskingGoodsConfirm', { userSummary });
          }}
          goodsNames={goodsNames}
          goodsPrices={goodsPrices}
        />
      </Container>
    );
  }
}

export default GoodsInputPage;
