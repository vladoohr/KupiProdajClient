import { 
	NEW_AD,
	EDIT_AD,
	ERROR_AD,
	LOAD,
	GET_ADS
} from '../actions/types'

const INITIAL_STATE = {
	errorMessages: [],
	successMesage: '',
	successEditMessage: '',
	load_data: {},
	ad_data: {},
	user: {},
	ads: [],
	ads_per_page: []
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case NEW_AD:
			return {...state, errorMessages: [], successMesage: action.payload}
		case EDIT_AD:
			return {...state, errorMessages: [], successEditMessage: action.payload }
		case ERROR_AD:
			return {...state, errorMessages: action.payload.errors, successMesage: ''}
		case LOAD:
			return {...state, load_data: action.payload.load_ad, ad_data: action.payload.ad, user: action.payload.user}
		case GET_ADS:
			return {...state, ads: action.payload.ads, ads_per_page: action.payload.ads_per_page}
	}

	return state
}