import React from 'react';
import { Container, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import Line from '../../atoms/Line/Line';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';

function ParticipantsList({ participantsList, navigation }) {
  if (!participantsList) {
    return null;
  }
  return (
    <List>
      {participantsList.map((item) => {
        return (
          <ListItem
            key={item.userId}
            onPress={() => {
              navigation.navigate('RequestConfirmModal', {
                userImageUrl: item.userImageUrl,
                userNickName: item.nickName,
                userComment: item.comment,
                userPrefecture: item.prefecture,
              });
            }}
          >
            <Thumbnail source={{ uri: item.userImageUrl }} />
            <Body>
              <Text>{`${item.nickName}さん ${item.prefecture}`}</Text>
              <Text note>{item.comment}</Text>
            </Body>
          </ListItem>
        );
      })}
    </List>
  );
}

function ParticipantsListPage({ navigation, results }) {
  return (
    <Container>
      <SectionHeader
        navigation={navigation}
        title="ライブの参加予定者"
        hasTabs
      />
      <Line />
      <ParticipantsList
        participantsList={results}
        navigation={navigation}
      />
    </Container>
  );
}

export default ParticipantsListPage;
