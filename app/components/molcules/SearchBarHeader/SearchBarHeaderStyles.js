import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: constants.mainColor,
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: constants.headerInputBackColor,
  },
  searchBar: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
});
