/**
 * @flow
 */
import React from 'react';
import { Header, Title, Body, Left, Right, Icon, Button } from 'native-base';
import styles from './SectionHeaderStyle';
import constants from '../../../constants/constants';

type Props = {
  navigation: any,
  title: string,
  hasTabs: ?boolean,
  headerColor: ?string,
  textColor: ?string,
  backIconColor: ?string,
};

function SectionHeader(props: Props) {
  const {
    navigation,
    title,
    hasTabs,
    headerColor,
    textColor,
    backIconColor,
  } = props;
  return (
    <Header
      style={{ backgroundColor: headerColor }}
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
            style={{
              color: backIconColor,
            }}
            name="ios-arrow-back"
          />
        </Button>
      </Left>
      <Body style={styles.titleContainer}>
        <Title
          style={{
               alignItems: 'center',
               fontWeight: 'bold',
               color: textColor,
          }}
        >
          {title}
        </Title>
      </Body>
      <Right />
    </Header>
  );
}

SectionHeader.defaultProps = {
  navigation: null,
  title: '',
  hasTabs: false,
  headerColor: constants.sectionHeaderColor,
  textColor: constants.mainTextColor,
  backIconColor: constants.iconColor,
};

export default SectionHeader;

