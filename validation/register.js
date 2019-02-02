// Required Dependencies
const Validator = require('validator');
const isEmpty = require ('./is-empty');

// Exports the function validateRegisterInput and passes parameters of data
module.exports = function validateRegisterInput(data){
    // Declare variable to an empty object to handle our user errors
    let errors = {};

    // Test our Register object with the predefined errors in isEmpty.js
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

    // Validate the length of the name to be a certain amount of characters
    if(!Validator.isLength(data.name, { min: 2, max: 30 })){
        errors.name = 'Name must be between 2 and 30 characters';
    }

    // Validate and display message to user for the name error 
    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

    // Validate and display message to user for the email error 
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    // Validate and display message to user for the email valid error 
    if(Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    // Validate and display message to user for the password error 
    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    // Validate and display message to user for the password length error 
    if(Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must be at least 6 characters long';
    }

    // Validate and display message to user for the confirm password error 
    if(Validator.isEmpty(data.confirmPassword)){
        errors.confirmPassword = 'Confirm Password field is required';
    }

    // Validate and display message to user for the confirm password if matches password error 
    if(Validator.equals(data.password, data.confirmPassword)){
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

