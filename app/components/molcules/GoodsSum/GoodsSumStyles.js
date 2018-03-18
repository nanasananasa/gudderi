import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
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
