import {combineReducers} from 'redux';

import test from './testReducer';
import test2 from './testReducerFile2';

export default combineReducers({
	test,
	test2
})
