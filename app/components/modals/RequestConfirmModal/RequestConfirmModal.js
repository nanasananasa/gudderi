import React from 'react';
import { Text, Button, Thumbnail } from 'native-base';
import GudderiModal from '../../template/GudderiModal/GudderiModal';
import styles from './RequestConfirmModalStyles';

// 依頼する確認モーダル
function RequestConfirmModal(props) {
  const {
    onPressConfirm,
    navigation,
    visible,
    data,
  } = props;

  return (
    <GudderiModal
      navigation={navigation}
      visible={visible}
    >
      <Thumbnail
        style={styles.thumbnail}
        source={{ uri: data.userImageUrl }}
      />
      <Text>{`${data.userNickName}さん ${data.userPrefecture}`}</Text>
      <Text note>{data.userComment}</Text>
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
