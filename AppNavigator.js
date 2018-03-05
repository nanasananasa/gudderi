import { StackNavigator, TabNavigator } from 'react-navigation';
import Top from './app/containers/Top/Top';
import ArtistSearch from './app/containers/ArtistSearch/ArtistSearch';
import LiveList from './app/containers/LiveList/LiveList';
import RequestConfirmModal from './app/components/modals/RequestConfirmModal/RequestConfirmModal';
import ParticipantsList from './app/containers/ParticipantsList/ParticipantsList';
import MainTabFooter from './app/components/organisms/MainTabFooter/MainTabFooter';

const ClientStack = StackNavigator({
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
}, { headerMode: 'none' });

const WorkerStack = StackNavigator({
  Top: {
    screen: Top,
  },
  ArtistSearch: {
    screen: ArtistSearch,
  },
  LiveList: {
    screen: LiveList,
  },
}, { headerMode: 'none' });

const GlobalTabNavigator = TabNavigator(
  {
    Client: { screen: ClientStack },
    Worker: { screen: WorkerStack },
  },
  {
    tabBarComponent: MainTabFooter,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default StackNavigator({
  GlobalTabNavigator: {
    screen: GlobalTabNavigator,
  },
  RequestConfirmModal: {
    screen: RequestConfirmModal,
  },
}, { headerMode: 'none', mode: 'modal' });
