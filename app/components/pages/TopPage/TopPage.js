import React from 'react';
import { View, Image } from 'react-native';
import { Container } from 'native-base';
import MainHeader from '../../../components/organisms/MainHeader/MainHeader';
import iconImage from '../../../constants/assets/icon.png';
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
      <View style={styles.bodyContainer}>
        <Image
          source={iconImage}
          style={styles.iconImage}
        />
      </View>
    </Container>
  );
}

export default TopPage;
