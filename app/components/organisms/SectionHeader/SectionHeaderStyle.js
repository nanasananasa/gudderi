import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  header: {
    backgroundColor: constants.sectionHeaderColor,
  },
  backIconContainer: {
    flex: 1,
  },
  backIcon: {
    color: constants.iconColor,
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
