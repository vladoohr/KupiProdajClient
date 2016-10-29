import { 
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER
} from '../actions/types'

export default function(state={}, action) {
	switch(action.type) {
		case AUTH_USER:
			return {...state, error: '', authenticate: true}
		case AUTH_ERROR:
			return {...state, error: action.payload, authenticate: false}
		case UNAUTH_USER:
		return {...state, error: '', authenticate: false}
	}

	return state
}
