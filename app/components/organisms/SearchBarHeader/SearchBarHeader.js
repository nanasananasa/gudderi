import React from 'react';
import PropTypes from 'prop-types';
import { Header, Item, Icon, Input, Button, Text } from 'native-base';
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
        <Icon
          style={styles.searchIcon}
          name="ios-search"
        />
        <Input
          placeholder={hintText}
          onChangeText={onChangeText}
          returnKeyType="done"
        />
      </Item>
      <Button
        transparent
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.cancelButton}>キャンセル</Text>
      </Button>
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

