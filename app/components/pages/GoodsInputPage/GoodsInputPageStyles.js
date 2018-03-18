import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: constants.whiteColor,
  },
  userSummaryContainer: {
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
  },
  userName: {
    marginTop: 10,
  },
  goodsSumLine: {
    backgroundColor: constants.borderColor,
    height: 1,
  },
  goodsSumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  goodsSumText: {
    flex: 2,
    fontSize: constants.fontSizeL,
  },
  askButton: {
    flex: 1,
    backgroundColor: constants.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  askButtonText: {
    color: constants.whiteColor,
  },
});
