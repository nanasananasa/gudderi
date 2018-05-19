import React from 'react';
import { Container, Spinner, Text } from 'native-base';
import styles from './LoadingStyles';
import constants from '../../../constants/constants';

function Loading() {
  return (
    <Container style={styles.container}>
      <Spinner color={constants.mainColor} />
      <Text>読み込み中...</Text>
    </Container>
  );
}
export default Loading;
