import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectBook} from '../actions/index'

class BooksList extends Component{		
	render(){
		var html = ""
		if(this.props.books){
			html = this.props.books.map((book) => {
					return(
					<li key={book.title}
						onClick={() => this.props.hookedSelectBook(book)}>
						<a href="#"														
							className="">
							{book.title}
						</a>
					</li>)
			})
		}
		return(
			<div>
				<ul>
					{html}
				</ul>
			</div>
		)
	}
}

var mapDispatchToProps = function(dispatch){
	return bindActionCreators({hookedSelectBook: selectBook}, dispatch)
}

var mapStateToProps = function(state){
	return({
		books: state.books
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
