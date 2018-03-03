import React from 'react';
import LiveListPage from '../../components/pages/LiveListPage/LiveListPage';

function LiveList(props) {
  const { artistId, artistName } = props.navigation.state.params;
  return (
    <LiveListPage
      {...props}
      artistName={artistName}
    />
  );
}

export default LiveList;
