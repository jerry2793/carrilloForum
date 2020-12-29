import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import courses from './courses'
import user from './user'

export default combineReducers({
  auth,
  user,
  courses,
  form: formReducer
});
