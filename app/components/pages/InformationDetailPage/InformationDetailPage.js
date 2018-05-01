/**
 * @flow
 */
import React from 'react';
import { Container } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import type { UserInformation } from '../../../types/userInformationTypes';

type Props = {
  userInformation: UserInformation,
  navigation: any,
};

function InformationDetailPage(props: Props) {
  const { userInformation, navigation } = props;
  console.log(userInformation);
  return (
    <Container>
      <SectionHeader
        primary
        navigation={navigation}
        title="お知らせ"
      />
    </Container>
  );
}

export default InformationDetailPage;

