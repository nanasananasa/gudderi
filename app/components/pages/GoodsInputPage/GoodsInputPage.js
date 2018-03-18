import React from 'react';
import { Container, Button, Text, Thumbnail } from 'native-base';
import { View, ScrollView } from 'react-native';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import Line from '../../atoms/Line/Line';
import GoodsInputForm from '../../organisms/GoodsInputForm/GoodsInputForm';
import { inputGoodsName, inputGoodsPrice, addGoodsForm } from '../../../redux/actions/eventActions';
import styles from './GoodsInputPageStyles';

function UserSummary({ userSummary }) {
  return (
    <View style={styles.userSummaryContainer}>
      <Thumbnail
        large
        source={{ uri: userSummary.userImageUrl }}
      />
      <Text style={styles.userName}>
        {`${userSummary.nickName}さん ${userSummary.prefecture}`}
      </Text>
    </View>
  );
}

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

function GoodsSum({ goodsPrices }) {
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
        }}
        title="確認"
        style={styles.askButton}
      >
        <Text style={styles.askButtonText}>確認</Text>
      </Button>
    </View>
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
        <View style={styles.goodsSumLine} />
        <GoodsSum
          goodsPrices={goodsPrices}
        />
      </Container>
    );
  }
}

export default GoodsInputPage;
