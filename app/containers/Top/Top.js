import React from 'react';
import TopPage from '../../components/pages/TopPage/TopPage';
import MenuDrawerContainer from '../MenuDrawerContainer/MenuDrawerContainer';

function Top(props) {
  return (
    <TopPage {...props} />
  );
}

export default MenuDrawerContainer(Top);
