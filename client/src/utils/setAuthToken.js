// Required dependencies
import axios from 'axios';

// A function to handle the auth header token header
const setAuthToken = token => {
    // If there is a token apply this to the request 
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete the auth token header
        delete axios.defaults.headers.common['Authorization'];
    }
};

// Export the setAuthToken
export default setAuthToken;