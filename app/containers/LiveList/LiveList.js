import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import LiveListPage from '../../components/pages/LiveListPage/LiveListPage';
import {
  fetchLiveList,
  LIVE_SORT_KEY_DATE,
  LIVE_SORT_KEY_POPULAR,
} from '../../redux/actions/eventActions';

function LiveList(props) {
  const {
    liveSearchOrderByDate,
    liveSearchOrderByPopular,
  } = props;
  const {
    artistName,
  } = props.navigation.state.params;

  if (!liveSearchOrderByDate || !liveSearchOrderByPopular) {
    return null; //TODO: LoadingComponent
  }

  return (
    <LiveListPage
      {...props}
      artistName={artistName}
    />
  );
}

const connector = connect((state) => {
  return {
    liveSearchOrderByDate: state.event.liveSearchOrderByDate,
    liveSearchOrderByPopular: state.event.liveSearchOrderByPopular,
  };
});

export default compose(
  connector,
  pure,
  lifecycle({
    componentWillMount() {
      const {
        dispatch,
        liveSearchOrderByDate,
        liveSearchOrderByPopular,
      } = this.props;
      const {
        artistId,
      } = this.props.navigation.state.params;

      if (!liveSearchOrderByDate) {
        dispatch(fetchLiveList(artistId, LIVE_SORT_KEY_DATE));
      }
      if (!liveSearchOrderByPopular) {
        dispatch(fetchLiveList(artistId, LIVE_SORT_KEY_POPULAR));
      }
    },
  }),
)(LiveList);

