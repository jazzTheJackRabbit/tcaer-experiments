export var selectBook = function(book){
	return({
		type: 'BOOK_SELECTED',
		payload: book
	})
}