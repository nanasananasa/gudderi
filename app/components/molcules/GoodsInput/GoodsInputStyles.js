import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

const rowContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 5,
  paddingRight: 5,
};

const inputStyle = {
  height: 30,
  padding: 5,
  borderBottomColor: constants.borderColor,
  borderBottomWidth: 1,
  fontSize: constants.fontSizeM,
};

export default StyleSheet.create({
  goodsContainer: {
    ...rowContainer,
  },
  goodsLabel: {
    flex: 1,
    fontSize: constants.fontSizeM,
  },
  goodsInput: {
    flex: 4,
    ...inputStyle,
  },
  goodsIconButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  goodsIcon: {
    color: 'gray',
  },
  priceContainer: {
    ...rowContainer,
  },
  priceLabel: {
    flex: 4,
    fontSize: constants.fontSizeM,
  },
  priceInput: {
    flex: 1,
    ...inputStyle,
  },
  priceUnitLabel: {
    flex: 1,
    fontSize: constants.fontSizeM,
  },
});
