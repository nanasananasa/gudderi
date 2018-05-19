/**
 * @flow
 */
import React from 'react';
import { List, ListItem, Body, Text } from 'native-base';
import type { LiveListState } from '../../../types/liveTypes';

function LiveListContent(props) {
  const {
    navigation,
    liveList,
  }: {
    navigation: any,
    liveList: LiveListState,
  } = props;

  return (
    <List
      dataArray={liveList.liveList}
      renderRow={(item) => {
        return (
          <ListItem
            key={item.liveId}
            onPress={() => {
              navigation.navigate('ParticipantsList', {
                liveId: item.liveId,
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
    />
  );
}

export default LiveListContent;
