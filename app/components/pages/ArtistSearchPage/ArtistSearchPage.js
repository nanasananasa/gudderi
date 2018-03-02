import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { searchArtist } from '../../../redux/actions/eventActions';
import SearchBarHeader from '../../../components/organisms/SearchBarHeader/SearchBarHeader';

function ArtistSearchResultList({ results }) {
  if (!results) {
    return null;
  }
  return (
    <List>
      {results.map((item) => {
        return (
          <ListItem
            key={item.id}
            onClick={() => {}}
          >
            <Text>{item.name}</Text>
          </ListItem>
        );
      })}
    </List>
  );
}

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
        navigation={navigation}
      />
      <Content>
        <ArtistSearchResultList results={results} />
      </Content>
    </Container>
  );
}

export default ArtistSearchPage;
