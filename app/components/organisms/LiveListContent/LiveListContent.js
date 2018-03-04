import React from 'react';
import { Content, List, ListItem, Body, Text } from 'native-base';
import styles from './LiveListContentStyles';

function LiveList({ liveList }) {
  if (!liveList) {
    return null;
  }
  return (
    <List>
      {liveList.map((item) => {
        return (
          <ListItem
            key={item.id}
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
  const { liveList } = props;
  return (
    <Content>
      <LiveList liveList={liveList} />
    </Content>
  );
}


export default LiveListContent;
