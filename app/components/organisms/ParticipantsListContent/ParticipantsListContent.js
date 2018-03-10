import React from 'react';
import { List, ListItem, Text, Body, Thumbnail } from 'native-base';
import { showRequestConfirmModal } from '../../../redux/actions/modalActions';
import UserSummary from '../../../entities/UserSummary';

function ParticipantsListContent({ participantsList, dispatch }) {
  if (!participantsList) {
    return null;
  }
  return (
    <List>
      {participantsList.map((item) => {
        const userSummary = new UserSummary(item);
        return (
          <ListItem
            key={item.userId}
            onPress={() => {
              dispatch(showRequestConfirmModal(true, userSummary));
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

export default ParticipantsListContent;
