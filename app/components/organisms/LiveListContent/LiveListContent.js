/**
 * @flow
 */
import React from 'react';
import { FlatList, Text } from 'react-native';
import { Container, ListItem, Body } from 'native-base';
import Loading from '../../atoms/Loading/Loading';
import styles from './LiveListContentStyles';
import type { Live, LiveListState } from '../../../types/liveTypes';
import { fetchMoreLiveList } from '../../../redux/actions/liveActions';

function MoreLoading({ moreLoadingState }: { moreLoadingState: boolean }) {
  if (!moreLoadingState) {
    return null;
  }
  return (
    <Loading />
  );
}

function EmptyComponent() {
  return (
    <Container style={styles.emptyContainer}>
      <Text>ライブ情報がありません。</Text>
      <Text>時間をおいてお試しください。</Text>
    </Container>
  );
}

function LiveListContent(props) {
  const {
    navigation,
    liveList,
    dispatch,
    artistId,
  }: {
    navigation: any,
    liveList: LiveListState,
    dispatch: Function,
    artistId: number,
  } = props;

  return (
    <FlatList
      keyExtractor={(item: Live) => `${item.liveScheduleId}`}
      data={liveList.liveList}
      renderItem={({ item }) => {
        return (
          <ListItem
            onPress={() => {
              navigation.navigate('ParticipantsList', {
                liveId: item.liveScheduleId,
              });
            }}
          >
            <Body>
              <Text style={styles.liveItemContent}>
                {`<${item.liveName}>`}
              </Text>
              <Text style={styles.liveItemTitle}>
                日程：
                <Text style={styles.liveItemContent}>
                  {item.liveDate}
                </Text>
              </Text>
              <Text style={styles.liveItemTitle}>
                場所：
                <Text style={styles.liveItemContent}>
                  {item.livePlace}
                </Text>
              </Text>
            </Body>
          </ListItem>
        );
      }}
      onEndReached={() => {
        dispatch(fetchMoreLiveList(artistId));
      }}
      onEndReachedThreshold={0}
      ListFooterComponent={
        <MoreLoading
          moreLoadingState={liveList.moreLoadingState}
        />
      }
      ListEmptyComponent={
        <EmptyComponent />
      }
    />
  );
}

export default LiveListContent;
