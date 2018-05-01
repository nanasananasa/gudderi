import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import InformationDetailPage from '../../components/pages/InformationDetailPage/InformationDetailPage';
import { updateReadFlag } from '../../redux/actions/informationActions';

function InformationDetail(props) {
  const { userInformation } = props.navigation.state.params;
  return (
    <InformationDetailPage
      {...props}
      userInformation={userInformation}
    />
  );
}

export default compose(
  connect(),
  pure,
  lifecycle({
    componentWillMount() {
      const { dispatch } = this.props;
      const { userInformation } = this.props.navigation.state.params;
      // 表示した瞬間に既読にする
      dispatch(updateReadFlag(userInformation.userInformationId));
    },
  }),
)(InformationDetail);

