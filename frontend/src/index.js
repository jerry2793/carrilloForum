import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './components/App';
import Welcome from './components/Welcome';

import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

import Courses from './components/courses'
import Threads from './components/threads/index'

const store = createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  {

    auth: { authenticated: localStorage.getItem('token') },
    courses: [],
    buttonInOperation: false
    
  },
  applyMiddleware(reduxThunk)
);

const Renders = props => {
  return (<div><Provider store={store}>

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

  </Provider></div>)
}

ReactDOM.render( <Renders />, document.querySelector('#root') );
