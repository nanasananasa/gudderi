/**
 * @flow
 */
import React from 'react';
import { List, ListItem, Text } from 'native-base';
import type { ArtistSearchState } from '../../../types/artistTypes';

function ArtistSearchResultList(props) {
  const {
    searchResults,
    navigation,
  }: {
    searchResults: ArtistSearchState,
    navigation: any,
  } = props;

  if (!searchResults || searchResults.totalCount === 0) {
    return null;
  }
  return (
    <List>
      {searchResults.artistList.map((item) => {
        return (
          <ListItem
            key={item.artistId}
            onPress={() => {
              navigation.navigate('LiveList', {
                artistId: item.artistId,
                artistName: item.artistName,
              });
            }}
          >
            <Text>{item.artistName}</Text>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ArtistSearchResultList;
