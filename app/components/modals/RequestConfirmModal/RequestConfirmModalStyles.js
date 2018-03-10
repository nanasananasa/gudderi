import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

const buttonStyle = {
  justifyContent: 'center',
  width: 200,
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userNameContainer: {
    justifyContent: 'center',
  },
  userName: {
    marginBottom: 10,
  },
  thumbnail: {
    marginRight: 10,
  },
  confirmButton: {
    backgroundColor: constants.mainColor,
    marginTop: 20,
    ...buttonStyle,
  },
  confirmText: {
    color: constants.whiteColor,
  },
  cancelButton: {
    ...buttonStyle,
  },
  cancelText: {
    color: constants.mainTextColor,
  },
});
