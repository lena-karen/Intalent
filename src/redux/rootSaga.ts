import { spawn } from 'redux-saga/effects'
import { authSaga } from './auth'
import { settingsSaga } from './setting';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { authReducer } from './auth';
import { settingsReducer } from './setting';

//const middlewares = sagaMiddleware
// declare global {
// 	interface Window {
// 	  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// 	}
//   }
//type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
	authUser: authReducer,
	settings: settingsReducer,
})

function* sagas() {
	yield spawn(authSaga)
	yield spawn(settingsSaga)
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, applyMiddleware(...middlewares))


sagaMiddleware.run(sagas)