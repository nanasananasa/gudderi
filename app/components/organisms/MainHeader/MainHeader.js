import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Body, Left, Right, Icon, Button } from 'native-base';
import styles from './MainHeaderStyles';

function MainHeader(props) {
  const { onClickSearchIcon } = props;
  return (
    <Header style={styles.header}>
      <Left style={styles.headerComponent}>
        <Button
          transparent
          onPress={() => {
            onClickSearchIcon();
          }}
        >
          <Icon
            style={styles.searchIcon}
            name="ios-search"
          />
        </Button>
      </Left>
      <Body style={styles.headerComponent}>
        <Title style={styles.title}>Gudderi</Title>
      </Body>
      <Right />
    </Header>
  );
}

MainHeader.propTypes = {
  onClickSearchIcon: PropTypes.func,
};

MainHeader.defaultProps = {
  onClickSearchIcon: () => {
  },
};

export default MainHeader;

