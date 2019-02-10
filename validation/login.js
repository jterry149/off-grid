// Required Dependencies
const Validator = require('validator');
const isEmpty = require ('./is-empty');

// Exports the function validateLoginInput and passes parameters of data
module.exports = function validateLoginInput(data){
    // Declare variable to an empty object to handle our user errors
    let errors = {};

    // Test our Register object with the predefined errors in isEmpty.js
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // Validate and display message to user for the email valid error 
    if(Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    
    // Validate and display message to user for the email error 
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    

    // Validate and display message to user for the password error 
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

