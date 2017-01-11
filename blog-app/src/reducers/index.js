import { combineReducers } from 'redux';
import postsReducer from './postsReducer'
import {reducer as formsReducer} from 'redux-form'

const rootReducer = combineReducers({
	posts: postsReducer,
	form: formsReducer
});

export default rootReducer;
