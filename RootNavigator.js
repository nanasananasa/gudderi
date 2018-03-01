import { StackNavigator } from 'react-navigation';
import Top from './app/containers/Top/Top';
import ArtistSearch from './app/containers/ArtistSearch/ArtistSearch';
import LiveList from './app/containers/LiveList/LiveList';

const RootNavigator = StackNavigator({
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

export default RootNavigator;
