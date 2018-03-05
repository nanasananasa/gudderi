import React from 'react';
import { Modal, View } from 'react-native';
import styles from './GudderiModalStyles';

function GudderiModal(props) {
  const {
    children,
    navigation,
    visible,
  } = props;
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => {
        navigation.goBack();
      }}
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
