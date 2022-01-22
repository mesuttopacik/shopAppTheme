import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import rootWatcher from '../../sagas/rootSagaWatcher';

import rootReducers from './rootReducers'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default store;