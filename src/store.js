import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import apiSaga from 'modules/api/saga'
import apiReducer from 'modules/api/reducer'
import appReducer from 'modules/app/reducer'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    : compose

const reducers = combineReducers({
    api: apiReducer,
    app: appReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(apiSaga)

export default store