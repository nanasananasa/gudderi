import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: constants.whiteColor,
  },
  dividerLine: {
    backgroundColor: constants.borderColor,
    height: 1,
  },
  listItemContainer: {
    marginTop: 30,
  },
  goodsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  goodsLabel: {
    fontSize: constants.fontSizeM,
    flex: 1,
  },
  goodsText: {
    fontSize: constants.fontSizeM,
    flex: 3,
  },
});
