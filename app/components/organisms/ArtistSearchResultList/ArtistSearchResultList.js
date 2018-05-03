import React from 'react';
import { List, ListItem, Text } from 'native-base';

function ArtistSearchResultList({ results, navigation }) {
  if (!results) {
    return null;
  }
  return (
    <List>
      {results.map((item) => {
        return (
          <ListItem
            key={item.id}
            onPress={() => {
              navigation.navigate('LiveList', {
                artistId: item.id,
                artistName: item.name,
              });
            }}
          >
            <Text>{item.name}</Text>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ArtistSearchResultList;
