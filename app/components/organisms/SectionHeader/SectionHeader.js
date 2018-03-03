import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Body, Left, Right, Icon, Button } from 'native-base';
import styles from './SectionHeaderStyle';

function SectionHeader(props) {
  const { navigation, title } = props;
  const { artistName, artistId } = navigation.state.params;
  return (
    <Header style={styles.header}>
      <Left style={styles.headerComponent}>
        <Button
          transparent
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="ios-arrow-back"
          />
        </Button>
      </Left>
      <Body>
        <Title
          style={styles.title}
          ellipsizeMode="clip"
        >
          {title}
        </Title>
      </Body>
      <Right />
    </Header>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
};

SectionHeader.defaultProps = {
  title: '',
};
export default SectionHeader;

