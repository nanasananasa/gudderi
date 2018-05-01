import React from 'react';
import InformationDetailPage from '../../components/pages/InformationDetailPage/InformationDetailPage';

function InformationDetail(props) {
  const { userInformation } = props.navigation.state.params;
  return (
    <InformationDetailPage
      {...props}
      userInformation={userInformation}
    />
  );
}

export default InformationDetail;
