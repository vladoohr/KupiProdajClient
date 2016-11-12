import axios from 'axios';
import { browserHistory } from 'react-router';

import { 
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER,
	NEW_AD,
	ERROR_AD
} from './types'

const ROOT_URL = 'http://localhost:3000'

export function signupUser(values) {
	return dispatch => {
		axios.post(`${ROOT_URL}/api/v1/users/signup`, values)
			.then(response => {
				dispatch({
					type: AUTH_USER,
					payload: response.data
				})
				localStorage.setItem('auth_token', response.data.token)				
				localStorage.setItem('user', JSON.stringify(response.data.user))				
				browserHistory.push('/')
			})
			.catch(error => {
				dispatch({
					type: AUTH_ERROR,
					payload: error.response.data
				})
			})
  }
}

export function signinUser({email, password}) {
	return dispatch => {
		axios.post(`${ROOT_URL}/api/v1/users/signin`, {email, password})
			.then(response => {
				console.log(response)
				dispatch({
					type: AUTH_USER,
					payload: response.data
				})
				localStorage.setItem('auth_token', response.data.auth_token)
				localStorage.setItem('user', JSON.stringify(response.data.user))
				browserHistory.push('/')
			})
			.catch(error => {
				dispatch({
					type: AUTH_ERROR,
					payload: {errors: ['Погрешен Е-маил/Лозинка']}
				})
			})
	}
}

export function signoutUser() {
	return dispatch => {
		dispatch({type: UNAUTH_USER})
		localStorage.removeItem('auth_token')
		localStorage.removeItem('user')
		browserHistory.push('/')
	}
}

export function newAdvertisement(values) {
	return dispatch => {
		axios.post(`${ROOT_URL}/api/v1/advertisements/new`, values)
			.then(response => {
				console.log(response)
				// dispatch({
				// 	type: NEW_AD,
				// 	payload: response.data.messgae 
				// })
			})
			.catch(error => {
				dispatch({
					type: ERROR_AD,
					payload: error.response.data
				})
			})
	}
}