export default function(activeBookState = null, action){	
	if(action.payload){
		switch(action.type){
			case 'BOOK_SELECTED':
				return action.payload
		}	
	}

	return activeBookState
}