import React from 'react';
import { Text, Thumbnail } from 'native-base';
import { View } from 'react-native';
import styles from './UserSummaryStyles';

function UserSummary({ userSummary }) {
  return (
    <View style={styles.userSummaryContainer}>
      <Thumbnail
        large
        source={{ uri: userSummary.userImageUrl }}
      />
      <Text style={styles.userName}>
        {`${userSummary.nickName}さん ${userSummary.prefecture}`}
      </Text>
    </View>
  );
}

export default UserSummary;
