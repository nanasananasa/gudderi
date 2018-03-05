import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './GudderiModalStyles';

function GudderiModal(props) {
  const {
    children,
    visible,
    onPressBackdrop,
  } = props;
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.6}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={50}
      animationOutTiming={50}
      onBackdropPress={onPressBackdrop}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          {children != null ? children : null}
        </View>
      </View>
    </Modal>
  );
}

export default GudderiModal;
