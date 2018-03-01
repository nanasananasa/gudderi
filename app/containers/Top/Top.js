import React from 'react';
import { Container, Content } from 'native-base';
import MainHeader from '../../components/molcules/MainHeader/MainHeader';
import MainTabFooter from '../../components/molcules/MainTabFooter/MainTabFooter';
import styles from './TopStyles';

function Top(props) {
  const {
    navigation,
    dispatch,
  } = props;
  return (
    <Container style={styles.container}>
      <MainHeader
        onClickSearchIcon={() => {
          navigation.navigate('ArtistSearch');
        }}
      />
      <Content></Content>
      <MainTabFooter />
    </Container>
  );
}

export default Top;
