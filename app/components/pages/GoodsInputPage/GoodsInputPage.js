import React from 'react';
import { Container, Text, Thumbnail } from 'native-base';
import { View } from 'react-native';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import styles from './GoodsInputPageStyle';

function GoodsInputPage(props) {
  const { navigation } = props;
  const { userSummary } = navigation.state.params;
  return (
    <Container style={styles.container}>
      <SectionHeader
        navigation={navigation}
        title="グッズ入力"
      />
      <View style={styles.userSummaryContainer}>
        <Thumbnail
          source={{ uri: userSummary.userImageUrl }}
        />
        <Text style={styles.userName}>{`${userSummary.nickName}さん ${userSummary.prefecture}`}</Text>
      </View>
    </Container>
  );
}

export default GoodsInputPage;
