import axios from 'axios'

export const FETCH_POST = "FETCH_POST"
export const FETCH_POSTS = "FETCH_POSTS"
export const CREATE_POST = "CREATE_POST"
export const DELETE_POST = "DELETE_POST"


const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_KEY = "?key=lorem"

export function deletePost(id){
	const API_PATH = "/posts/"
	var requestPromise = axios.delete(`${ROOT_URL}${API_PATH}${id}${API_KEY}`)

	return({
		type: DELETE_POST,
		payload: requestPromise
	})
}


export function fetchPost(id){
	const API_PATH = "/posts/"
	var requestPromise = axios.get(`${ROOT_URL}${API_PATH}${id}${API_KEY}`)

	return({
		type: FETCH_POST,
		payload: requestPromise
	})
}

export function fetchPosts(){
	const API_PATH = "/posts"
	var requestPromise = axios.get(`${ROOT_URL}${API_PATH}${API_KEY}`)

	return({
		type: FETCH_POSTS,
		payload: requestPromise
	})
}

export function createPost(props){
	const API_PATH = "/posts"
	var requestPromise = axios.post(`${ROOT_URL}${API_PATH}${API_KEY}`, props)

	return({
		type: CREATE_POST,
		payload: requestPromise
	})
}