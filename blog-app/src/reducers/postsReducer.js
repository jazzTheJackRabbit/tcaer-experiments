import {FETCH_POSTS} from '../actions/index'

export default function(state = null, action){		
	if(action.payload){
		switch(action.type){
			case FETCH_POSTS:
				return action.payload
		}	
	}

	return state
}