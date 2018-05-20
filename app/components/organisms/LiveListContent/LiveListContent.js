/**
 * @flow
 */
import React from 'react';
import { FlatList } from 'react-native';
import { ListItem, Body, Text } from 'native-base';
import type { Live, LiveListState } from '../../../types/liveTypes';
import { fetchLiveList } from '../../../redux/actions/liveActions';

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
              <Text>{item.liveName}</Text>
              <Text>{`${item.liveDate} ${item.livePlace}`}</Text>
            </Body>
          </ListItem>
        );
      }}
      onEndReached={() => {
        //if (liveList.liveList.length >= liveList.totalCount) {
        //  return;
        //}
        console.log("onEndReached");
        dispatch(fetchLiveList(artistId, liveList.currentPage + 1));
      }}
    />
  );
}

export default LiveListContent;
