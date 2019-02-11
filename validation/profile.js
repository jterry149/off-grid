// Required Dependencies
const Validator = require('validator');

// Required files
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  // Empty variable object for errors
  let errors = {};

  // Test our Profile object with the predefined errors in isEmpty.js
  data.handle = !isEmpty(data.handle) ? data.handle : '';

  // Handle needs to be a certain length
  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 4 characters';
  }

  // Profile field is required and can't be empty
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  // Make sure input is a valid Url Youtube
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  // Make sure input is a valid Url Twitter
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  // Make sure input is a valid Url Facebook
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  // Make sure input is a valid Url Instagram
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
