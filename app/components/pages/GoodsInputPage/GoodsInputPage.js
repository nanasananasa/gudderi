import React from 'react';
import { Container, Thumbnail } from 'native-base';
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
      <Thumbnail
        style={styles.thumbnail}
        source={{ uri: data.userImageUrl }}
      />
    </Container>
  );
}

export default GoodsInputPage;
