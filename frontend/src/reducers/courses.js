import * as types from '../actions/types'

export default (state = [], action) => {
    const {payload} = action
    
    switch (action.type) {
        case types.FETCH_COURSES:
            return [payload]
            
        default:
            return state;
    }
};