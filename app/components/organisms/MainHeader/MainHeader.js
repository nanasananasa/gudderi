import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Body, Left, Right, Icon, Button } from 'native-base';
import styles from './MainHeaderStyles';

function MainHeader(props) {
  const { onClickSearchIcon, onClickMenu } = props;
  return (
    <Header style={styles.header}>
      <Left>
        <Button
          title="menu"
          transparent
          onPress={() => {
            onClickMenu();
          }}
        >
          <Icon
            style={styles.icon}
            name="ios-menu"
          />
        </Button>
      </Left>
      <Body>
        <Title style={styles.title}>Gudderi</Title>
      </Body>
      <Right>
        <Button
          title="search"
          transparent
          onPress={() => {
            onClickSearchIcon();
          }}
        >
          <Icon
            style={styles.icon}
            name="ios-search"
          />
        </Button>
      </Right>
    </Header>
  );
}

MainHeader.propTypes = {
  onClickSearchIcon: PropTypes.func,
  onClickMenu: PropTypes.func,
};

MainHeader.defaultProps = {
  onClickSearchIcon: () => {
  },
  onClickMenu: () => {
  },
};

export default MainHeader;

