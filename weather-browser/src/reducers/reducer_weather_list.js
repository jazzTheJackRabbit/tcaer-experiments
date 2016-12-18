import ACTION_TYPES from '../constants/action_type_constants'

var weatherListReducer = function(currentSubState = [], action){
	if (action.payload != null)
		switch(action.type){
			case ACTION_TYPES.FETCH_WEATHER:					
				return [action.payload, ...currentSubState]
		}
	return currentSubState
}

export default weatherListReducer