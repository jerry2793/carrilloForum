// the helper lib to do some redundant fetches. 
// do not use this, planning to remove it when app is engineered

import Axios from "axios"

import * as types from './types'


export const fetCourses = async token => dispatch => {
    Axios.defaults.headers['authorization'] = token

    Axios.get('/users/threads')
}

// grab all relevant user data from backend (later utalize graphql for backend)
// dispatch them into the store after user sign in, load everything (make sure a good loader is required)
export const fetchUserData = async (token) => dispatch => {
    Axios.defaults.headers['authorization'] = token

    const fetchData = async (type, disp_type, dispatch) => {
        const res = await Axios.get('/users/' + type)
        dispatch({ types: disp_type, payload: res.data })
    }
    
    fetchData('threads', types.FETCH_THREADS, dispatch)
    fetchData('courses', types.FETCH_COURSES, dispatch)
    fetchData('friends', types.FETCH_FRIENDS, dispatch)
}