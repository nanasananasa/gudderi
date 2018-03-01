import { createStore, compose } from 'redux';
import reducers from './reducers/index';

export default createStore(
  reducers,
  {},
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);
