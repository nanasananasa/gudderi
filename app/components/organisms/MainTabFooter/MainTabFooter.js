import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import styles from './MainTabFooterStyles';

function MainTabFooter({ navigation }) {
  const { routeName } = navigation.state;
  return (
    <Footer>
      <FooterTab>
        <Button
          onPress={() => {
            navigation.navigate('Client');
          }}
          rounded={false}
          style={styles.firstTab}
        >
          <Text style={styles.textColor}>依頼をする</Text>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Worker');
          }}
          rounded={false}
          style={styles.secondTab}
        >
          <Text style={styles.textColor}>依頼を受ける</Text>
        </Button>
        <Button
          rounded={false}
          style={styles.thirdTab}
        >
          <Text style={styles.textColor}>マイページ</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

export default MainTabFooter;

