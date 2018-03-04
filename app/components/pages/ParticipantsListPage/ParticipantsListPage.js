import React from 'react';
import { Container, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import Line from '../../atoms/Line/Line';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';

function ParticipantsList({ participantsList }) {
  if (!participantsList) {
    return null;
  }
  return (
    <List>
      {participantsList.map((item) => {
        return (
          <ListItem
            key={item.userId}
          >
            <Thumbnail source={{ uri: item.userImageUrl }} />
            <Body>
              <Text>{item.nickName}</Text>
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
      <ParticipantsList participantsList={results} />
    </Container>
  );
}

export default ParticipantsListPage;
