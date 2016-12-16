import React, {Component} from 'react'
import {connect} from 'react-redux'

class ActiveBook extends Component{		
	render(){
		var html = "No book selected"
		if(this.props.activeBook){
			html = (
				<div key={this.props.activeBook.title}>{this.props.activeBook.title}</div>
			)
		}
		return(
			<h3>
				{html}
			</h3>
		)
	}
}

var mapStateToProps = function(state){
	return({
		activeBook: state.activeBook
	})
}

export default connect(mapStateToProps)(ActiveBook)
