// Required Dependencies
const Validator = require('validator');
// Required Files
const isEmpty = require('./is-empty');

module.exports = function validateVehicleInput(data) {
    // Variable object to handle vehicle input errors
    let errors = {};

    // Test for predefined errors
    data.make = !isEmpty(data.make) ? data.make : '';
    data.model = !isEmpty(data.model) ? data.model : '';
    data.year = !isEmpty(data.year) ? data.year : '';

    // Make should be required
    if (Validator.isEmpty(data.make)) {
        errors.make = 'Vehicle make field is required';
    }

    // Model should be required
    if (Validator.isEmpty(data.model)) {
        errors.model = 'Vehicle model field is required';
    }

    // Year should be required
    if (Validator.isEmpty(data.year)) {
        errors.year = 'Vehicle year field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
