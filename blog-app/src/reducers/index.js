import { combineReducers } from 'redux';
import postsReducer from './postsReducer'
import activePostReducer from './activePostReducer'
import {reducer as formsReducer} from 'redux-form'

const rootReducer = combineReducers({
	posts: postsReducer,
	form: formsReducer,
	activePost: activePostReducer
});

export default rootReducer;
