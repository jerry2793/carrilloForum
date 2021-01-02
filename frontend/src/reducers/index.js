import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as types from '../actions/types'

import auth from './auth';
import courses from './courses'
import user from './user'

function buttonInOperation (state=false, action) {
  switch (action.type) {
    case types.SET_OPERATION:
      return action.payload
      break;
  
    default:
      return state
      break;
  }
}
export default combineReducers({
  auth,
  user,
  courses,
  buttonInOperation,
  form: formReducer
});
