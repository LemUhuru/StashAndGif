import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../rootReducer';
import { loadState } from '../helpers/localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [
  thunk,
  logger,
];

const persistedState = loadState();

export default function configureStore() {
 return createStore (
   rootReducer,
   persistedState,
   composeWithDevTools(
     applyMiddleware(...middlewares)
   ));
};
