import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

const buttonStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  marginLeft: 20,
  marginRight: 20,
};

export default StyleSheet.create({
  thumbnail: {
    marginBottom: 10,
  },
  buttonStyle: {
    width: 200,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  confirmButton: {
    backgroundColor: constants.mainColor,
    marginTop: 10,
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
