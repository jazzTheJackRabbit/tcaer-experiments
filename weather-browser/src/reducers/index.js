import { combineReducers } from 'redux';
import searchTermReducer from './reducer_search_term'
import weatherListReducer from './reducer_weather_list'

const rootReducer = combineReducers({
	searchTerm: searchTermReducer,
	weatherList: weatherListReducer
});

export default rootReducer;
