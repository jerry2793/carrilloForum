import { 
    SET_OPERATION,
    FETCH_ERROR,
    POST_ERROR,
    AUTH_ERROR,
 } from "../actions/types";

 
export default (state = {}, action) => {
    const {
        payload,
        entity,
    } = action
    
    switch (action.type) {
        case FETCH_ERROR: 
            return {
                ...state,
                [`${entity} fetch`]: payload
            }
        
        case POST_ERROR:
            return {
                ...state,
                [`${entity} post`]: payload
            }

        case AUTH_ERROR:
            return {
                ...state,
                auth: payload
            }

        case SET_OPERATION: 
            return {
                ...state,
                [`${entity} button`]: payload
            }
            
        default:
            return state;
    }
};