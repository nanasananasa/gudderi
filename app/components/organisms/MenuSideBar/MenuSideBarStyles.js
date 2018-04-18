import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  menuListContainer: {
    backgroundColor: constants.whiteColor,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
  menuIcon: {
    color: constants.iconColor,
  },
  accountInfo: { flexDirection: 'row' },
});
