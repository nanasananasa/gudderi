import React from 'react';
import { Container, Content } from 'native-base';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';

function LiveListPage(props) {
  const { navigation, artistName } = props;
  return (
    <Container>
      <SectionHeader
        navigation={navigation}
        title={`「${artistName}」ライブ一覧`}
      />
      <Content />
    </Container>
  );
}

export default LiveListPage;
