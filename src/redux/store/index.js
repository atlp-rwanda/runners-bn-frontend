import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/rootReducer';

const middlewares = [thunk];

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default Store;
