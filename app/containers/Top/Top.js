import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, pure } from 'recompose';
import { fetchInformation }from '../../redux/actions/informationActions';
import TopPage from '../../components/pages/TopPage/TopPage';
import MenuDrawerContainer from '../MenuDrawerContainer/MenuDrawerContainer';

//TODO: お知らせ情報に関しては
function Top(props) {
  return (
    <TopPage {...props} />
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
