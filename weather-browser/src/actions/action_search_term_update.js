import ACTION_TYPES from '../constants/action_type_constants'

var searchTermUpdate = function(search_term){
	return({
		type: ACTION_TYPES.SEARCH_TERM_UPDATE,
		payload: search_term
	})
}

export default searchTermUpdate