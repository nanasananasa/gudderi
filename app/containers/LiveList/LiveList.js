/**
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import LiveListPage from '../../components/pages/LiveListPage/LiveListPage';
import Loading from '../../components/atoms/Loading/Loading';
import { fetchLiveList } from '../../redux/actions/liveActions';
import type { LiveListState } from '../../types/liveTypes';

function LiveList(props) {
  const { liveList }: { liveList: LiveListState } = props;
  const {
    artistName,
  } = props.navigation.state.params;
  //TODO: エラー時の画面
  if (liveList.loading) {
    return (
      <Loading />
    );
  }
  return (
    <LiveListPage
      {...props}
      liveList={liveList}
      artistName={artistName}
    />
  );
}

const connectedComponent = connect((state) => {
  return {
    liveList: state.liveList,
  };
});

export default compose(
  connectedComponent,
  pure,
  lifecycle({
    componentWillMount() {
      const {
        dispatch,
        navigation,
      } = this.props;
      const {
        artistId,
      } = navigation.state.params;
      dispatch(fetchLiveList(artistId));
    },
  }),
)(LiveList);

