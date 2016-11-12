import { 
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER
} from '../actions/types'

const INITIAL_STATE = {
	user: {},
	authenticate: false,
	errors: []
}
export default function( state=INITIAL_STATE, action ) {
	switch(action.type) {
		case AUTH_USER:
			return { ...state, user: action.payload.user, authenticate: true, errors: [] }
		case AUTH_ERROR:
			return { ...state, authenticate: false, errors: action.payload.errors }
		case UNAUTH_USER:
			return { ...state, user: {}, authenticate: false, errors: [] }
	}
	return state
}
