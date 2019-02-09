// Import the types
import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

// Empty object for the initialState
const initialState = {};

// Export the state errors for the intitial state
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        case CLEAR_ERRORS:
            return {};
        default:
    return state;
    }
}