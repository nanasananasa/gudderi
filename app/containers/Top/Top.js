/**
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import { fetchInformation } from '../../redux/actions/informationActions';
import TopPage from '../../components/pages/TopPage/TopPage';
import MenuDrawerContainer from '../MenuDrawerContainer/MenuDrawerContainer';
import type { UserInformation, UserInformationState } from '../../types/userInformationTypes';

function countUnreadInformation(userInformationList: Array<UserInformation>): number {
  if (!userInformationList || userInformationList.length <= 0) {
    return 0;
  }
  return userInformationList.filter((userInformation) => {
    return !userInformation.readFlag;
  }).length;
}

type Props = {
  userInformation: UserInformationState,
  navigation: any,
  openDrawer: () => void,
};
function Top(props: Props) {
  const { userInformation } = props;
  const unreadUserInformationCount = countUnreadInformation(userInformation.informationList);
  return (
    <TopPage
      {...props}
      unreadInformationCount={unreadUserInformationCount}
    />
  );
}

const connectedComponent = connect((state) => {
  return {
    userInformation: state.information.userInformation,
  };
});

export default compose(
  connectedComponent,
  pure,
  lifecycle({
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(fetchInformation());
    },
  }),
)(MenuDrawerContainer(Top));
