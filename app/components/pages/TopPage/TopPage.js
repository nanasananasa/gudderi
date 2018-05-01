/**
 * @flow
 */
import React from 'react';
import { View, Image } from 'react-native';
import { Container } from 'native-base';
import MainHeader from '../../../components/organisms/MainHeader/MainHeader';
import iconImage from '../../../constants/assets/icon.png';
import styles from './TopPageStyle';

type Props = {
  navigation: any,
  openDrawer: () => void,
  unreadInformationCount: number,
};

function TopPage(props: Props) {
  const {
    navigation,
    openDrawer,
    unreadInformationCount,
  } = props;
  return (
    <Container style={styles.container}>
      <MainHeader
        onClickNotifications={() => {
          navigation.navigate('InformationList');
        }}
        onClickSearchIcon={() => {
          navigation.navigate('ArtistSearch');
        }}
        onClickMenu={() => openDrawer()}
        unreadInformationCount={unreadInformationCount}
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
