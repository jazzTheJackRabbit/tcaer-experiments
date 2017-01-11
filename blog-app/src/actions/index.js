import axios from 'axios'

export const FETCH_POSTS = "FETCH_POSTS"

const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_PATH = "/posts"
const API_KEY = "?key=123"

export function fetchPosts(){
	var requestPromise = axios.get(`${ROOT_URL}${API_PATH}${API_KEY}`)

	return({
		type: FETCH_POSTS,
		payload: requestPromise
	})
}