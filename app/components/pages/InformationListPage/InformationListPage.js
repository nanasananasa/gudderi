/**
 * @flow
 */
import React from 'react';
import { Container, List, ListItem, Body, Text } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import styles from './InformationListPageStyles';
import type { UserInformation, UserInformationState } from '../../../types/userInformationTypes';

type Props = {
  userInformation: UserInformationState,
  navigation: any,
};

function InformationList({ userInformationList, navigation }:
  { userInformationList: Array<UserInformation>, navigation: any }) {
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
        const backStyle = item.readFlag ? styles.readItem : styles.unreadItem;
        return (
          <ListItem
            key={item.userInformationId}
            style={backStyle}
            onPress={() => {
              navigation.navigate('InformationDetail', {
                userInformation: item,
              });
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
        primary
        navigation={navigation}
        title="お知らせ"
      />
      <InformationList
        userInformationList={userInformation.informationList}
        navigation={navigation}
      />
    </Container>
  );
}

export default InformationListPage;

