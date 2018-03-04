import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { searchArtist } from '../../../redux/actions/eventActions';
import SearchBarHeader from '../../../components/organisms/SearchBarHeader/SearchBarHeader';

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
          searchArtist();
          navigation.goBack();
        }}
        navigation={navigation}
      />
      <Content>
        <ArtistSearchResultList
          results={results}
          navigation={navigation}
        />
      </Content>
    </Container>
  );
}

export default ArtistSearchPage;
