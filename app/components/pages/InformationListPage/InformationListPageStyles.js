import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  unreadItem: {
    marginLeft: 0,
    backgroundColor: constants.lightPinkColor,
  },
  readItem: {
    marginLeft: 0,
    backgroundColor: constants.whiteColor,
  },
  informationDate: {
    color: constants.mainTextColor,
    fontSize: constants.fontSizeS,
  },
});
