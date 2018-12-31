import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/root_reducer';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  )
);

export default configureStore;
