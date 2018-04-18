import React from 'react';
import { Drawer } from 'native-base';
import MenuSideBar from '../../components/organisms/MenuSideBar/MenuSideBar';

function MenuDrawerContainer(Component) {
  return class extends React.Component {
    render() {
      this.closeDrawer = () => {
        this.drawer._root.close();
      };
      this.openDrawer = () => {
        this.drawer._root.open();
      };
      return (
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<MenuSideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Component
            {...this.props}
            openDrawer={this.openDrawer}
          />
        </Drawer>
      );
    }
  };
}

export default MenuDrawerContainer;
