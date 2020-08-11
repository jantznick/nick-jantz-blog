import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import blog from './blog';
import comments from './comments';

const rootReducer = combineReducers({
	blog,
	comments
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;