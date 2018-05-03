import React from 'react';
import { Container } from 'native-base';
import { searchArtist } from '../../../redux/actions/eventActions';
import SearchBarHeader from '../../organisms/SearchBarHeader/SearchBarHeader';
import ArtistSearchResultList from '../../organisms/ArtistSearchResultList/ArtistSearchResultList';

function ArtistSearchPage(props) {
  const {
    navigation,
    keyword,
    results,
    dispatch,
  } = props;
  return (
    <Container>
      <SearchBarHeader
        hintText="アーティスト名からさがす"
        onChangeText={(text) => {
          if (text === keyword) {
            return;
          }
          dispatch(searchArtist(text));
        }}
        onCancel={() => {
          dispatch(searchArtist());
          navigation.goBack();
        }}
        navigation={navigation}
      />
      <ArtistSearchResultList
        results={results}
        navigation={navigation}
      />
    </Container>
  );
}

export default ArtistSearchPage;
