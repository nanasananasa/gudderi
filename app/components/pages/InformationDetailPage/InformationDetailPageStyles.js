import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
  },
  createDate: {
    marginTop: 5,
    fontSize: constants.fontSizeS,
    color: constants.mainTextColor,
  },
  message: {
    marginTop: 30,
  },
});
