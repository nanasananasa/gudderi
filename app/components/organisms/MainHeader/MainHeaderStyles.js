import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: constants.mainColor,
  },
  icon: {
    color: constants.whiteColor,
    zIndex: 1,
  },
  badge: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 0,
  },
  title: {
    fontSize: constants.fontSizeL,
    fontWeight: 'bold',
    color: constants.whiteColor,
  },
});
