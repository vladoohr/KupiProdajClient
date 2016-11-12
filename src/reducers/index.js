import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import auth from './auth_reducer.js'
import ads from './ads_reducer.js'

const rootReducer = combineReducers({
	form: formReducer,
	auth,
	ads
});

export default rootReducer;
