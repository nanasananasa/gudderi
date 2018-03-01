import React from 'react';
import PropTypes from 'prop-types';
import { Header, Item, Icon } from 'native-base';
import { View, TextInput } from 'react-native';
import styles from './SearchBarHeaderStyles';

function SearchBarHeader(props) {
  const {
    hintText,
    onChangeText,
    navigation,
  } = props;
  return (
    <Header
      searchBar
      style={styles.headerContainer}
    >
      <Item style={styles.searchBarContainer}>
        <Icon name="ios-search" />
        <View style={styles.searchBar}>
          <TextInput
            placeholder={hintText}
            onChangeText={onChangeText}
            returnKeyType="done"
          />
        </View>
      </Item>
    </Header>
  );
}

SearchBarHeader.propTypes = {
  hintText: PropTypes.string,
  onChangeText: PropTypes.func,
};

SearchBarHeader.defaultProps = {
  hintText: '',
  onChangeText: () => {
  },
};

export default SearchBarHeader;

