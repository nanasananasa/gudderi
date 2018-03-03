import React from 'react';
import { Container, Text, Tab, Tabs } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import styles from './LiveListPageStyles';

function LiveListPage(props) {
  const { navigation, artistName } = props;
  return (
    <Container>
      <SectionHeader
        navigation={navigation}
        title={`「${artistName}」ライブ一覧`}
        hasTabs
      />
      <Tabs
        initialPage={0}
        tabBarUnderlineStyle={styles.tabLineStyle}
      >
        <Tab
          heading="日付順"
          activeTextStyle={styles.activeTabTextStyle}
        >
        </Tab>
        <Tab
          heading="人気順"
          activeTextStyle={styles.activeTabTextStyle}
        >
        </Tab>
      </Tabs>
    </Container>
  );
}

export default LiveListPage;
