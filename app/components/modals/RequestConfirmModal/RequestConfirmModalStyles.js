import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  thumbnail: {
    marginBottom: 10,
  },
  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.mainColor,
    width: 200,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  confirmText: {
    color: constants.whiteColor,
  },
});
