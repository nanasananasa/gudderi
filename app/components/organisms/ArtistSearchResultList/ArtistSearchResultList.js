/**
 * @flow
 */
import React from 'react';
import { List, ListItem, Text } from 'native-base';
import type { ArtistSearchState } from '../../../types/artistTypes';

function ArtistSearchResultList(props) {
  const {
    artistSearch,
    navigation,
  }: {
    artistSearch: ArtistSearchState,
    navigation: any,
  } = props;

  if (!artistSearch || artistSearch.totalCount === 0) {
    return null;
  }
  return (
    <List>
      {artistSearch.artistList.map((item) => {
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
