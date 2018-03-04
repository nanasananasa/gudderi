import React from 'react';
import { Content, List, ListItem, Body, Text } from 'native-base';

function LiveList({ liveList, navigation }) {
  if (!liveList) {
    return null;
  }
  return (
    <List>
      {liveList.map((item) => {
        return (
          <ListItem
            key={item.id}
            onPress={() => {
              navigation.navigate('ParticipantsList', {
                liveId: item.id,
              });
            }}
          >
            <Body>
              <Text>{item.liveName}</Text>
              <Text>{`${item.liveDate} ${item.livePlace}`}</Text>
            </Body>
          </ListItem>
        );
      })}
    </List>
  );
}

function LiveListContent(props) {
  const { liveList, navigation } = props;
  return (
    <Content>
      <LiveList
        liveList={liveList}
        navigation={navigation}
      />
    </Content>
  );
}


export default LiveListContent;
