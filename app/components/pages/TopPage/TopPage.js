import React from 'react';
import { Container, Content } from 'native-base';
import MainHeader from '../../../components/organisms/MainHeader/MainHeader';
import styles from './TopPageStyle';

function TopPage(props) {
  const {
    navigation,
    openDrawer,
  } = props;
  return (
    <Container style={styles.container}>
      <MainHeader
        onClickSearchIcon={() => {
          navigation.navigate('ArtistSearch');
        }}
        onClickMenu={() => openDrawer()}
      />
      <Content />
    </Container>
  );
}

export default TopPage;
