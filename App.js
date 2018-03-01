import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './RootNavigator';
import store from './app/redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
