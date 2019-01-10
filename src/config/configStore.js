import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../rootReducer';
import { loadState } from '../helpers/localStorage';

const middlewares = [
  thunk,
  logger,
];

const persistedState = loadState();

export default function configureStore() {
 return createStore (
   rootReducer,
   persistedState,
   applyMiddleware(...middlewares)
 );
};
