import React from 'react';
import { Container, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import Line from '../../atoms/Line/Line';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import RequestConfirmModal from '../../modals/RequestConfirmModal/RequestConfirmModal';
import { showRequestConfirmModal } from '../../../redux/actions/modalActions';
import styles from './ParticipantsListPageStyles';

function ParticipantsList({ participantsList, dispatch }) {
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

function ParticipantsListPage(props) {
  const {
    navigation,
    dispatch,
    results,
    data,
    visible,
  } = props;
  return (
    <Container style={styles.container}>
      <SectionHeader
        navigation={navigation}
        title="ライブの参加予定者"
        hasTabs
      />
      <Line />
      <ParticipantsList
        participantsList={results}
        dispatch={dispatch}
      />
      <RequestConfirmModal
        visible={visible}
        data={data}
        onPressConfirm={(pressedData) => {
            dispatch(showRequestConfirmModal(false, data));
            //TODO: dataを元に処理させる
        }}
        onPressBackdrop={() => {
            dispatch(showRequestConfirmModal(false, data));
        }}
      />
    </Container>
  );
}

export default ParticipantsListPage;
