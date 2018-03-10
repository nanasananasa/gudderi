import React from 'react';
import { List, ListItem, Text, Body, Thumbnail } from 'native-base';
import { showRequestConfirmModal } from '../../../redux/actions/modalActions';

function ParticipantsListContent({ participantsList, dispatch }) {
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
              dispatch(showRequestConfirmModal(true, {
                userImageUrl: item.userImageUrl,
                userNickName: item.nickName,
                userComment: item.comment,
                userPrefecture: item.prefecture,
              }));
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
