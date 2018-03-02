import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: constants.mainColor,
    alignItems: 'center',
  },
  searchBarContainer: {
    flex: 3,
    backgroundColor: constants.headerInputBackColor,
    borderRadius: 5,
  },
  searchIcon: {
    color: constants.whiteColor,
  },
  cancelButtonContainer: {
    flex: 1,
  },
  cancelButton: {
    color: constants.whiteColor,
  },
});
