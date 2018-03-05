import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.whiteColor,
    borderRadius: 5,
    padding: 30,
  },
});
