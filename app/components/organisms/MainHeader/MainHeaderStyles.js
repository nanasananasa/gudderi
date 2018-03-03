import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  header: {
    backgroundColor: constants.mainColor,
  },
  headerComponent: {
    flex: 1,
  },
  searchIcon: {
    color: constants.whiteColor,
  },
  title: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: constants.whiteColor,
  },
});
