import { 
	NEW_AD,
	ERROR_AD
} from '../actions/types'

const INITIAL_STATE = {
	errorMessages: [],
	successMesage: ''
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case NEW_AD:
			return {...state, errorMessages: [], successMesage: action.payload}
		case ERROR_AD: {
			return {...state, errorMessages: action.payload.errors, successMesage: ''}
		}
	}

	return state
}