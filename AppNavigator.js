import { StackNavigator } from 'react-navigation';
import Top from './app/containers/Top/Top';
import ArtistSearch from './app/containers/ArtistSearch/ArtistSearch';
import LiveList from './app/containers/LiveList/LiveList';
import ParticipantsList from './app/containers/ParticipantsList/ParticipantsList';
import AskingGoodsInput from './app/containers/AskingGoodsInput/AskingGoodsInput';
import AskingGoodsConfirm from './app/containers/AskingGoodsConfirm/AskingGoodsConfirm';
import InformationList from './app/containers/InformationList/InformationList';

export default StackNavigator({
  Top: {
    screen: Top,
  },
  ArtistSearch: {
    screen: ArtistSearch,
  },
  LiveList: {
    screen: LiveList,
  },
  ParticipantsList: {
    screen: ParticipantsList,
  },
  AskingGoodsInput: {
    screen: AskingGoodsInput,
  },
  AskingGoodsConfirm: {
    screen: AskingGoodsConfirm,
  },
  InformationList: {
    screen: InformationList,
  },
}, { headerMode: 'none' });
