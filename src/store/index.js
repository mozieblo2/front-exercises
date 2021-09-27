import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware/index';
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../sagas/api-saga';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk, initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(apiSaga);

export default store;