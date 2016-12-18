import ACTION_TYPES from '../constants/action_type_constants'

var searchTermReducer = function(currentSubState = '', action){
	if (action.payload != null)
		switch(action.type){
			case ACTION_TYPES.SEARCH_TERM_UPDATE:
				return action.payload
		}
	return currentSubState
}

export default searchTermReducer