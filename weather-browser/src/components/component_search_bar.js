import React, {Component} from 'react'
import actionCreators from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SearchBar extends Component{
	constructor(props){
		super(props)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleFormSubmit(event){
		event.preventDefault()
		this.props.fetchWeather(this.props.searchTerm)
	}

	render(){
		return(
			<form
				onSubmit = {this.handleFormSubmit}
				>
				<input 
					value={this.props.searchTerm}
					onChange={(event) => this.props.updateSearchTerm(event.target.value)}
				/>
				<button>Submit</button>
			</form>
		)
	}
}

var mapDispatchToProps = function(dispatch){
	return bindActionCreators({
		updateSearchTerm: actionCreators.searchTermUpdate,
		fetchWeather: actionCreators.fetchWeather
	}, dispatch)
}

var mapStateToProps = function(state){
	console.log(state)
	return({
		searchTerm: state.searchTerm
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)