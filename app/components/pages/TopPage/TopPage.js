import React from 'react';
import { Container, Content, Drawer } from 'native-base';
import MainHeader from '../../../components/organisms/MainHeader/MainHeader';
import MenuSideBar from '../../organisms/MenuSideBar/MenuSideBar';
import styles from './TopPageStyle';

class TopPage extends React.Component {
  render() {
    this.closeDrawer = () => {
      this.drawer._root.close();
    };
    this.openDrawer = () => {
      this.drawer._root.open();
    };
    const {
      navigation,
    } = this.props;
    return (
      <Container style={styles.container}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<MenuSideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <MainHeader
            onClickSearchIcon={() => {
              navigation.navigate('ArtistSearch');
            }}
            onClickMenu={() => this.openDrawer()}
          />
          <Content />
        </Drawer>
      </Container>
    );
  }
}

export default TopPage;
