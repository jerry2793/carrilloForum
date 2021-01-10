import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import App from './components/App';
import Welcome from './components/Welcome';

import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

import Courses from './components/courses'
import Threads from './components/threads/index'


ReactDOM.render( 
  <Provider store={store}>

    <BrowserRouter>

      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path='/threads' component={Threads} />
        <Route path='/courses' component={Courses} />
      </App>

    </BrowserRouter>

  </Provider> , document.querySelector('#root') );
