import { StackNavigator, TabNavigator } from 'react-navigation';
import Top from './app/containers/Top/Top';
import ArtistSearch from './app/containers/ArtistSearch/ArtistSearch';
import LiveList from './app/containers/LiveList/LiveList';
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

export default TabNavigator(
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
