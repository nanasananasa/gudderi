/**
 * @flow
 */
import React from 'react';
import { Container, Text } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import type { UserInformation } from '../../../types/userInformationTypes';
import styles from './InformationDetailPageStyles';

type Props = {
  userInformation: UserInformation,
  navigation: any,
};

function InformationDetailPage(props: Props) {
  const { userInformation, navigation } = props;
  return (
    <Container>
      <SectionHeader
        primary
        navigation={navigation}
        title="お知らせ"
      />
      <Container
        style={styles.container}
      >
        <Text>{userInformation.title}</Text>
        <Text style={styles.createDate}>{userInformation.createdAt}</Text>
        <Text style={styles.message}>
          {userInformation.message}
        </Text>
      </Container>
    </Container>
  );
}

export default InformationDetailPage;

