import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  header: {
    backgroundColor: constants.sectionHeaderColor,
  },
  backIconContainer: {
    flex: 1,
  },
  backIcon: {
    color: constants.backIconColor,
  },
  titleContainer: {
    flex: 5,
  },
  title: {
    alignItems: 'center',
    fontWeight: 'bold',
    color: constants.mainTextColor,
  },
});
