/**
 * @flow
 */
import React from 'react';
import { Container, List, ListItem, Body, Text } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import constants from '../../../constants/constants';
import styles from './InformationListPageStyles';
import type { UserInformation, UserInformationState } from '../../../types/userInformationTypes';

type Props = {
  userInformation: UserInformationState,
  navigation: any,
};

function InformationList({ userInformationList }: { userInformationList: Array<UserInformation> }) {
  if (!userInformationList || userInformationList.length <= 0) {
    return (
      <Container>
        <Text>お知らせは1件もありません。</Text>
      </Container>
    );
  }
  return (
    <List
      dataArray={userInformationList}
      renderRow={(item) => {
        return (
          <ListItem
            key={item.userInformationId}
            onPress={() => {
            }}
          >
            <Body>
              <Text>{item.title}</Text>
              <Text style={styles.informationDate}>
                {`${item.createdAt}`}
              </Text>
            </Body>
          </ListItem>
        );
      }}
    />
  );
}

function InformationListPage(props: Props) {
  const { userInformation, navigation } = props;
  return (
    <Container>
      <SectionHeader
        headerColor={constants.mainColor}
        textColor={constants.whiteColor}
        backIconColor={constants.whiteColor}
        navigation={navigation}
        title="お知らせ一覧"
      />
      <InformationList
        userInformationList={userInformation.informationList}
      />
    </Container>
  );
}

export default InformationListPage;

