import ACTION_TYPES from '../constants/action_type_constants'
import KEYS from '../constants/keys'
import axios from 'axios'

const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${KEYS.OPEN_WEATHER_API_KEY}`

var fetchWeather = function(city){
	var weather_url = `${URL}&q=${city},us`
	var response_promise = axios.get(weather_url)
	return({
		type: ACTION_TYPES.FETCH_WEATHER,
		payload: response_promise
	})
}

export default fetchWeather