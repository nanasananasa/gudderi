import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  header: {
    backgroundColor: constants.sectionHeaderColor,
  },
  title: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: constants.mainTextColor,
  },
});
