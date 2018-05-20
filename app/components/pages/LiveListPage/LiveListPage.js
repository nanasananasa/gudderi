/**
 * @flow
 */
import React from 'react';
import { Container } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import LiveListContent from '../../organisms/LiveListContent/LiveListContent';
import Line from '../../atoms/Line/Line';
import type { LiveListState } from '../../../types/liveTypes';

function LiveListPage(props: {
  navigation: any,
  dispatch: Function,
  artistId: number,
  artistName: string,
  liveList: LiveListState,
}) {
  const {
    navigation,
    artistName,
  } = props;
  return (
    <Container>
      <SectionHeader
        navigation={navigation}
        title={`${artistName}`}
      />
      <Line />
      <LiveListContent
        {...props}
      />
    </Container>
  );
}

export default LiveListPage;
