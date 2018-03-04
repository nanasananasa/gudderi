import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import ParticipantsListPage from '../../components/pages/ParticipantsListPage/ParticipantsListPage';
import { fetchParticipantsList } from '../../redux/actions/eventActions';

function ParticipantsList(props) {
  const { results } = props;
  if (!results) {
    return null; //TODO: LoadingComponent
  }
  return (
    <ParticipantsListPage
      {...props}
    />
  );
}

const connector = connect(state => ({
  ...state.event.participantsList,
}));

export default compose(
  connector,
  pure,
  lifecycle({
    componentWillMount() {
      const { dispatch } = this.props;
      const {
        liveId,
      } = this.props.navigation.state.params;
      dispatch(fetchParticipantsList(liveId));
    },
  }),
)(ParticipantsList);

