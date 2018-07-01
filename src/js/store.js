import {applyMiddleware, compose, createStore} from 'redux';
// import persistState from 'redux-localstorage';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const loggerMiddleware = createLogger({});

import reducer from './reducers'

const middleware = applyMiddleware(promise(), thunk, loggerMiddleware)

const enhancer = compose(
	middleware,
	// persistState(),
)

export default createStore(reducer, enhancer)
