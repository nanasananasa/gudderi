import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Body, Left, Right, Icon, Button } from 'native-base';
import styles from './SectionHeaderStyle';

function SectionHeader(props) {
  const { navigation, title, hasTabs } = props;
  return (
    <Header
      style={styles.header}
      hasTabs={hasTabs}
    >
      <Left style={styles.backIconContainer}>
        <Button
          transparent
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            style={styles.backIcon}
            name="ios-arrow-back"
          />
        </Button>
      </Left>
      <Body style={styles.titleContainer}>
        <Title style={styles.title}>
          {title}
        </Title>
      </Body>
      <Right />
    </Header>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  hasTabs: PropTypes.bool,
};

SectionHeader.defaultProps = {
  title: '',
  hasTabs: false,
};
export default SectionHeader;

