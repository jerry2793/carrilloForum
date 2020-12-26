import Axios from "axios"

import * as types from './types'

// grab all relevant user data from backend (later utalize graphql for backend)
// dispatch them into the store after user sign in, load everything (make sure a good loader is required)
export const fetchUserData = async (token) => dispatch => {
    Axios.defaults.headers['authorization'] = token
    Axios.get('/user/threads')
        .then(res => {
            dispatch({ type: types.FETCH_THREADS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: types.FETCH_ERROR, payload: res.data})
        })
    Axios.get('/user/courses')
        .then(res => {
            dispatch({ type: types.FETCH_COURSES, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: types.FETCH_ERROR, payload: res.data})
        })
    Axios.get('/user/friends')
        .then(res => {
            dispatch({ type: types.FETCH_FRIENDS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: types.FETCH_ERROR, payload: res.data})
        })
}