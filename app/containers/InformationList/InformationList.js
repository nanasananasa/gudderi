import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import InformationListPage from '../../components/pages/InformationListPage/InformationListPage';

function InformationList(props) {
  return (
    <InformationListPage
      {...props}
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
)(InformationList);
