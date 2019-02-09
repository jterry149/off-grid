// Required Dependencies
import isEmpty from '../validation/is-empty';

// Import the types
import { SET_CURRENT_USER } from '../actions/types';

// set the initial state object
const initialState = {
    isAuthenticated: false,
    user: {}
};

// Export the function for the initial state and return the state
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
    return state;
    }
  }
  
