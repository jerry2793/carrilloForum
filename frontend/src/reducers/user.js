import * as types from "../actions/types";


export default (state = {
    threads: '',
    courses: '',
    friends: '',
    errorMessage: ''
}, action) => {
    const { payload } = action
    
    switch (action.type) {
        case types.FETCH_THREADS:
            return { ...state, threads: payload}
        case types.FETCH_COURSES:
            return { ...state, threads: payload}
        case types.FETCH_FRIENDS:
            return { ...state, threads: payload}
            
        default:
            return state;
    }
};