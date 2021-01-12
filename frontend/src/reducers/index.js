import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as types from '../actions/types'

import auth from './auth';
import courses from './courses'
import user from './user'
import api from './api'

export default combineReducers({
  auth,
  user,
  courses,
  api,
  form: formReducer
});
