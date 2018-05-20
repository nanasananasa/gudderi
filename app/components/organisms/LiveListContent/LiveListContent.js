/**
 * @flow
 */
import React from 'react';
import { FlatList } from 'react-native';
import { Container, ListItem, Body, Text } from 'native-base';
import Loading from '../../atoms/Loading/Loading';
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
    <Container>
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
              <Text>{item.liveName}</Text>
              <Text>{`${item.liveDate} ${item.livePlace}`}</Text>
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
      />
    </Container>
  );
}

export default LiveListContent;
