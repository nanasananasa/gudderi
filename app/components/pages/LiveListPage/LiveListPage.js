import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import LiveListContent from '../../organisms/LiveListContent/LiveListContent';
import styles from './LiveListPageStyles';

function LiveListPage(props) {
  const {
    navigation,
    artistName,
    liveSearchOrderByDate,
    liveSearchOrderByPopular,
  } = props;
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
          <LiveListContent liveList={liveSearchOrderByDate.results} />
        </Tab>
        <Tab
          heading="人気順"
          activeTextStyle={styles.activeTabTextStyle}
        >
          <LiveListContent liveList={liveSearchOrderByPopular.results} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default LiveListPage;
