import {FETCH_POST} from '../actions/index'

export default function(state = null, action){		
	if(action.payload){
		switch(action.type){
			case FETCH_POST:
				return action.payload
		}	
	}

	return state
}