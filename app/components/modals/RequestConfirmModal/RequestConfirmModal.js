import React from 'react';
import { Text, Button, Thumbnail } from 'native-base';
import GudderiModal from '../../template/GudderiModal/GudderiModal';
import styles from './RequestConfirmModalStyles';

// 依頼する確認モーダル
function RequestConfirmModal(props) {
  const {
    onPressConfirm,
    navigation,
  } = props;
  const {
    userImageUrl,
    userNickName,
    userComment,
    userPrefecture,
  } = props.navigation.state.params;
  return (
    <GudderiModal navigation={navigation}>
      <Thumbnail
        style={styles.thumbnail}
        source={{ uri: userImageUrl }}
      />
      <Text>{`${userNickName}さん ${userPrefecture}`}</Text>
      <Text note>{userComment}</Text>
      <Button
        style={styles.confirmButton}
        onPress={() => onPressConfirm()}
        title="依頼する!"
      >
        <Text style={styles.confirmText}>依頼する!</Text>
      </Button>
    </GudderiModal>
  );
}

export default RequestConfirmModal;
