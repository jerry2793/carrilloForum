import * as types from '../actions/types'


const initialState = {
    all: [
        {
            name: 'course name',
            description: 'description of a dummy reducer data course',
            type: 'as;dlfhqowehoh'
        }
    ],
    newCourse: {},
    types: [],
}

export default (state = initialState, action) => {
    const {payload} = action
    
    switch (action.type) {
        case types.FETCH_COURSES:
            return [payload]

        case types.CREATE_COURSE:
            return {
                ...state, 
                newCourse: payload
            }
            
        default:
            return state;
    }
};