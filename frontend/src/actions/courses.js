import axios from "axios"
import { 
    COURSE_ENTITY,
    COURSE_TYPE_ENTITY,
    CREATE_COURSE_TYPE,
    POST_ERROR
 } from "./types";

export const fetchAllCourses = (callback) => async dispatch => {
    
}

export const createType = (formProps, cb) => async dispatch => {
    try {
        const res = await axios.post('/courses/types', formProps, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })

        dispatch({ type: CREATE_COURSE_TYPE, payload: res.data })

        cb()
    } catch (e) {
        dispatch({ type: POST_ERROR, entity: COURSE_TYPE_ENTITY, error: '' })
    }
}

export const createCourse = (formProps, cb) => async dispatch => {
    const res = await axios.post('/courses/add', formProps, { headers: localStorage.getItem('token') })
    
    try {
        // post the create course action to api
    } catch (e) {
        dispatch({ type: POST_ERROR, entity: COURSE_ENTITY, payload: 'Backend Course Create Failed' })
    }
}