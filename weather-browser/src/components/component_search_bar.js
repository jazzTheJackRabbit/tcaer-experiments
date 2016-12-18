import React, {Component} from 'react'
import actionCreators from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CityWeatherList from './component_city_weather_list'

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
			<div>
			<form
				onSubmit = {this.handleFormSubmit}
				className = "input-group">
				<input 
					placeholder="Enter City"
					className="form-control"
					value={this.props.searchTerm}
					onChange={(event) => this.props.updateSearchTerm(event.target.value)} />
				<span className="input-group-btn">
					<button className="btn btn-secondary">Add City</button>
				</span>
			</form>

			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>				
				<CityWeatherList />				
			</table>
			</div>
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
	return({
		searchTerm: state.searchTerm
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)