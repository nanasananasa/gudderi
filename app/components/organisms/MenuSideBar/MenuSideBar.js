import React from 'react';
import { List, ListItem, Thumbnail, Icon, Text, Left, Body, Right } from 'native-base';
import styles from './MenuSideBarStyles';

function MenuSideBar(props) {
  //TODO: アカウントの情報取ってきて、出すか、会員登録リンク
  const { navigator } = props;
  return (
    <List style={styles.menuListContainer}>
      <ListItem>
        <Thumbnail
          source={{ uri: 'https://image.pet-home.jp/user_file/2017/08/01/1036314_th320.jpg' }}
        />
        <Body>
          <Text>{`大将さん`}</Text>
        </Body>
      </ListItem>
      <ListItem
        icon
      >
        <Left>
          <Icon
            name="ios-home"
            style={styles.menuIcon}
          />
        </Left>
        <Body>
          <Text>ホーム</Text>
        </Body>
        <Right>
          <Icon
            name="ios-arrow-forward"
            style={styles.menuIcon}
          />
        </Right>
      </ListItem>
      <ListItem
        icon
      >
        <Left>
          <Icon
            name="ios-filing"
            style={styles.menuIcon}
          />
        </Left>
        <Body>
          <Text>申請した依頼一覧</Text>
        </Body>
        <Right>
          <Icon
            name="ios-arrow-forward"
            style={styles.menuIcon}
          />
        </Right>
      </ListItem>
      <ListItem
        icon
      >
        <Left>
          <Icon
            name="ios-help-circle"
            style={styles.menuIcon}
          />
        </Left>
        <Body>
          <Text>ガイド</Text>
        </Body>
        <Right>
          <Icon
            name="ios-arrow-forward"
            style={styles.menuIcon}
          />
        </Right>
      </ListItem>
      <ListItem
        icon
      >
        <Left>
          <Icon
            name="ios-contact"
            style={styles.menuIcon}
          />
        </Left>
        <Body>
          <Text>お問い合わせ</Text>
        </Body>
        <Right>
          <Icon
            name="ios-arrow-forward"
            style={styles.menuIcon}
          />
        </Right>
      </ListItem>
      <ListItem
        icon
      >
        <Left>
          <Icon
            name="ios-settings"
            style={styles.menuIcon}
          />
        </Left>
        <Body>
          <Text>設定</Text>
        </Body>
        <Right>
          <Icon
            name="ios-arrow-forward"
            style={styles.menuIcon}
          />
        </Right>
      </ListItem>
    </List>
  );
}

export default MenuSideBar;
