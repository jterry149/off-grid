// Required dependencies
import axios from 'axios';

// Required Files
import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_ERRORS,
    SET_CURRENT_USER
  } from './types';

// Get the current profile and dispatch that to the user
export const getCurrentProfile = () => dispatch => {
    // Disptach function to setProfileLoading 
    dispatch(setProfileLoading());
    
    // Get methed to retrieve user current profile
    axios.get('/api/profile').then (res =>
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: {}
        })
    );
};

// Get the profiles handle
export const getProfileByHandle = handle => dispatch => {
    // Dispatch function to setProfileLoading
    dispatch(setProfileLoading());
    axios.get(`/api/profile/handle/${handle}`).then(res =>
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_PROFILE,
            payload: null
        })
    );
};

// Create our user Profile and post to the database
export const createProfile = (profileData, history) => dispatch => {
    axios.post('/api/profile', profileData).then(res => history.push('/dashboard'))
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Add vehicles
// Add experience
export const addVehicle = (vehData, history) => dispatch => {
    axios.post('/api/profile/vehicle', vehData).then(res => 
            history.push('/dashboard')
    )
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};
// Delete Vehicles
export const deleteVehicle = id => dispatch => {
    axios.delete(`/api/profile/vehicle/${id}`).then(res =>
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    );
};

// Get all profiles and display to the members
export const getProfiles = () => dispatch => {
    // Dispatch to setProfileLoading 
    dispatch(setProfileLoading());
    axios.get('/api/profile/all').then(res =>
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: GET_PROFILES,
            payload: null
        })
    );
};
  
// Delete the account and the profile from the database api
export const deleteAccount = () => dispatch => {
    
    if (window.confirm('Are you sure you want to delete your account? This can NOT be undone!')) {
        axios.delete('/api/profile').then(res =>
            dispatch({
                type: SET_CURRENT_USER,
                payload: {}
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
          })
        );
    }
};

// Load the profile
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};

// Clear the profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};