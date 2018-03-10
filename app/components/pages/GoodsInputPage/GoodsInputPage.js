import React from 'react';
import { Container } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';

function GoodsInputPage(props) {
  const { navigation } = props;
  console.log("call goodsinput page");
  console.log(props);
  return (
    <Container >
      <SectionHeader
        navigation={navigation}
        title="グッズ入力"
      />
    </Container>
  );
}

export default GoodsInputPage;
