import React from 'react';
import { Container } from 'native-base';
import Line from '../../atoms/Line/Line';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import RequestConfirmModal from '../../modals/RequestConfirmModal/RequestConfirmModal';
import ParticipantsListContent from '../../organisms/ParticipantsListContent/ParticipantsListContent';
import { showRequestConfirmModal } from '../../../redux/actions/modalActions';
import styles from './ParticipantsListPageStyles';

function ParticipantsListPage(props) {
  const {
    navigation,
    dispatch,
    results,
    modalShownUserSummary,
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
      <ParticipantsListContent
        participantsList={results}
        dispatch={dispatch}
      />
      <RequestConfirmModal
        visible={visible}
        userSummary={modalShownUserSummary}
        onPressConfirm={(pressedUserSummary) => {
            navigation.navigate('GoodsInput', { userSummary: pressedUserSummary });
            // モーダルを閉じる
            dispatch(showRequestConfirmModal(false, null));
        }}
        onPressBackdrop={() => {
            dispatch(showRequestConfirmModal(false, null));
        }}
      />
    </Container>
  );
}

export default ParticipantsListPage;
