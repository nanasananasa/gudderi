import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: constants.mainColor,
  },
  icon: {
    color: constants.whiteColor,
  },
  title: {
    fontSize: constants.fontSizeL,
    fontWeight: 'bold',
    color: constants.whiteColor,
  },
});
