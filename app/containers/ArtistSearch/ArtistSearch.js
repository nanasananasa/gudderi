import React from 'react';
import { connect } from 'react-redux';
import ArtistSearchPage from '../../components/pages/ArtistSearchPage/ArtistSearchPage';

function ArtistSearch(props) {
  return (
    <ArtistSearchPage {...props} />
  );
}

export default connect(state => ({
  artistSearch: state.artistSearch,
}))(ArtistSearch);
