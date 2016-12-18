import { combineReducers } from 'redux';
import searchTermReducer from './reducer_search_term'

const rootReducer = combineReducers({
	searchTerm: searchTermReducer
});

export default rootReducer;
