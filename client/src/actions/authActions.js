// Required dependencies
import axios from 'axios';

// Required Files
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// A function to register the user into the database
export const registerUser = (userData, history) => 
dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// A function to login and get the user token from api
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            // Variable used to save response to the local storage
            
            const { token } = res.data;
            // Set the token to the localStorage
            localStorage.setItem('jwtToken', token);
            // Set the token to be the auth header
            setAuthToken(token);
            // Decode the token to retrieve the user data
            const decoded = jwt_decode(token);
            // Set the current user date
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// A function to set the current logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// A function to log out the user from the application
export const logoutUser = () => dispatch => {
    // Remove the tokens from the localStorage 
    localStorage.removeItem('jwtToken');

    // Remove the auth header from future request if user is logged out
    setAuthToken(false);

    // Set the current user object to empty brackets {} which will make the authenticated false
    dispatch(setCurrentUser({}));
};


