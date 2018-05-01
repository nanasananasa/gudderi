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
  primary: ?boolean
};

const PRIMARY_STYLE = {
  headerColor: constants.mainColor,
  textColor: constants.whiteColor,
  backIconColor: constants.whiteColor,
};
const SUB_STYLE = {
  headerColor: constants.sectionHeaderColor,
  textColor: constants.mainTextColor,
  backIconColor: constants.iconColor,
};

function SectionHeader(props: Props) {
  const {
    navigation,
    title,
    hasTabs,
    primary,
  } = props;
  const headerStyle = primary ? PRIMARY_STYLE : SUB_STYLE;
  return (
    <Header
      style={{ backgroundColor: headerStyle.headerColor }}
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
              color: headerStyle.backIconColor,
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
                   color: headerStyle.textColor,
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
  primary: false,
};

export default SectionHeader;

