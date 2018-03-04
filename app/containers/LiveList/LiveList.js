import React from 'react';
import { connect, bindActionCreators } from 'react-redux';
import LiveListPage from '../../components/pages/LiveListPage/LiveListPage';
import {
  fetchLiveList,
  LIVE_SORT_KEY_DATE,
  LIVE_SORT_KEY_POPULAR,
} from '../../redux/actions/eventActions';

function LiveList(props) {
  const {
    artistId,
    artistName,
  } = props.navigation.state.params;
  const {
    liveSearchOrderByDate,
    liveSearchOrderByPopular,
    dispatch,
  } = props;

  //TODO: recompose化
  if (!liveSearchOrderByDate) {
    dispatch(fetchLiveList(artistId, LIVE_SORT_KEY_DATE));
    return null;//TODO: Loading
  }
  if (!liveSearchOrderByPopular) {
    dispatch(fetchLiveList(artistId, LIVE_SORT_KEY_POPULAR));
    return null;//TODO: Loading
  }

  return (
    <LiveListPage
      {...props}
      artistName={artistName}
    />
  );
}

export default connect((state) => {
  return {
    liveSearchOrderByDate: state.event.liveSearchOrderByDate,
    liveSearchOrderByPopular: state.event.liveSearchOrderByPopular,
  };
})(LiveList);

