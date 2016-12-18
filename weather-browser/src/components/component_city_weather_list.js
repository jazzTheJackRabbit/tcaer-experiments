import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LineChart from './component_line_chart'

class WeatherList extends Component{

	createWeatherListMarkup(){		
		if(this.props.weatherList){
			return this.props.weatherList.map((weather) => {
				var city_name = weather.data.city.name
				var temperature_list = weather.data.list.map(forecast => forecast.main.temp)
				var pressure_list = weather.data.list.map(forecast => forecast.main.pressure)
				var humidity_list = weather.data.list.map(forecast => forecast.main.humidity)
				return(
					<tr key={city_name}>
						<td>{city_name}</td>
						<td><LineChart data={temperature_list} color="red"/></td>
						<td><LineChart data={pressure_list} color="green"/></td>
						<td><LineChart data={humidity_list} color="blue"/></td>
					</tr>
				)
			})
		}
	}

	render(){
		return(
			<tbody>
				{this.createWeatherListMarkup()}
			</tbody>
		)
	}
}

var mapStateToProps = function(state){ //state is given by the reducer - managed by redux
	return({
		weatherList: state.weatherList
	})
}

export default connect(mapStateToProps)(WeatherList)