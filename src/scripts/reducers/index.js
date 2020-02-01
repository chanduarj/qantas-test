import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';
import currencies from './currencies';
export default combineReducers({
    currencies,
    form
})