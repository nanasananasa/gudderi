import React from 'react';
import { Container } from 'native-base';
import { searchArtist } from '../../../redux/actions/artistActions';
import SearchBarHeader from '../../organisms/SearchBarHeader/SearchBarHeader';
import ArtistSearchResultList from '../../organisms/ArtistSearchResultList/ArtistSearchResultList';

function ArtistSearchPage(props) {
  const {
    navigation,
    keyword,
    searchResults,
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
        searchResults={searchResults}
        navigation={navigation}
      />
    </Container>
  );
}

export default ArtistSearchPage;
