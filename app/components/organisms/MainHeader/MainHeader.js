import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Text, Left, Right, Body, Badge, Icon, Button } from 'native-base';
import styles from './MainHeaderStyles';

function UnreadBadge({ unreadCount }) {
  if (unreadCount <= 0) {
    return null;
  }
  return (
    <Badge style={styles.badge}>
      <Text>{unreadCount}</Text>
    </Badge>
  );
}

function MainHeader(props) {
  const {
    onClickSearchIcon,
    onClickNotifications,
    onClickTodo,
    onClickMenu,
    unreadInformationCount,
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
          <UnreadBadge unreadCount={unreadInformationCount} />
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
  unreadInformationCount: 0,
};

export default MainHeader;

