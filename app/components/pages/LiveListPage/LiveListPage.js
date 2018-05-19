/**
 * @flow
 */
import React from 'react';
import { Container } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import LiveListContent from '../../organisms/LiveListContent/LiveListContent';
import type { LiveListState } from '../../../types/liveTypes';

function LiveListPage(props) {
  const {
    navigation,
    artistName,
    liveList,
  }: {
    navigation: any,
    artistName: string,
    liveList: LiveListState,
  } = props;
  return (
    <Container>
      <SectionHeader
        navigation={navigation}
        title={`「${artistName}」ライブ一覧`}
        hasTabs
      />
      <LiveListContent
        liveList={liveList}
        navigation={navigation}
      />
    </Container>
  );
}

export default LiveListPage;
