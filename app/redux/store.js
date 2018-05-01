import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middlewareList = [
  thunk,
];
const appliedMiddlewareList = applyMiddleware(...middlewareList);

export default createStore(
  reducers,
  compose(
    appliedMiddlewareList,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
