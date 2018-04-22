import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Left, Right, Body, Icon, Button } from 'native-base';
import styles from './MainHeaderStyles';

function MainHeader(props) {
  const {
    onClickSearchIcon,
    onClickNotifications,
    onClickTodo,
    onClickMenu,
  } = props;
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
        <Button
          title="notification"
          transparent
          onPress={() => {
            onClickNotifications();
          }}
        >
          <Icon
            style={styles.icon}
            name="ios-notifications"
          />
        </Button>
        <Button
          title="todo"
          transparent
          onPress={() => {
            onClickTodo();
          }}
        >
          <Icon
            style={styles.icon}
            name="ios-checkmark"
          />
        </Button>
      </Right>
    </Header>
  );
}

MainHeader.propTypes = {
  onClickSearchIcon: PropTypes.func,
  onClickNotifications: PropTypes.func,
  onClickTodo: PropTypes.func,
  onClickMenu: PropTypes.func,
};

MainHeader.defaultProps = {
  onClickSearchIcon: () => {
  },
  onClickNotifications: () => {
  },
  onClickTodo: () => {
  },
  onClickMenu: () => {
  },
};

export default MainHeader;

