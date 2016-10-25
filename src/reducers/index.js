import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import auth from './auth_reducer.js'

const rootReducer = combineReducers({
	form: formReducer,
	auth
});

export default rootReducer;
