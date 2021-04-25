import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import apiReducer from 'modules/api/reducer';
import createSagaMiddleware from 'redux-saga';
import apiSaga from 'modules/api/saga'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    : compose

const reducers = combineReducers({
    api: apiReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(apiSaga)

export default store;