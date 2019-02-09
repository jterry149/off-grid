// Required Dependencies 
const Validator = require('validator');

// Required Files
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
    // Empty object to handle errors
    let errors = {};
  
    // Test to make sure the data text field is not empty
    data.text = !isEmpty(data.text) ? data.text : '';
  
    // Post must be a certain length of characters
    if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
      errors.text = 'Post must be between 10 and 300 characters';
    }
    
    // If there is a post the text field must not be blank
    if (Validator.isEmpty(data.text)) {
      errors.text = 'Text field is required';
    }
  
    return {
      errors,
      isValid: isEmpty(errors)
    };
};