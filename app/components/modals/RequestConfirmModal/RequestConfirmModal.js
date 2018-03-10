import React from 'react';
import { Text, Button, Thumbnail } from 'native-base';
import { View } from 'react-native';
import GudderiModal from '../../template/GudderiModal/GudderiModal';
import styles from './RequestConfirmModalStyles';

// 依頼する確認モーダル
//FIXME: Flowを使って型安全化する
function RequestConfirmModal(props) {
  const {
    onPressConfirm,
    visible,
    userSummary,
    onPressBackdrop,
  } = props;

  if (!visible) {
    return null;
  }

  return (
    <GudderiModal
      visible={visible}
      onPressBackdrop={onPressBackdrop}
    >
      <View style={styles.userContainer}>
        <Thumbnail
          style={styles.thumbnail}
          source={{ uri: userSummary.userImageUrl }}
        />
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{`${userSummary.nickName}さん ${userSummary.prefecture}`}</Text>
          <Text note>{userSummary.comment}</Text>
        </View>
      </View>

      <Button
        style={styles.confirmButton}
        onPress={() => onPressConfirm(userSummary)}
        title="依頼する!"
      >
        <Text style={styles.confirmText}>依頼する!</Text>
      </Button>

      <Button
        style={styles.cancelButton}
        transparent
        title=""
        onPress={() => {
          if (!onPressBackdrop) {
            return;
          }
          onPressBackdrop();
        }}
      >
        <Text style={styles.cancelText}>キャンセル</Text>
      </Button>
    </GudderiModal>
  );
}

export default RequestConfirmModal;
