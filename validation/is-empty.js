// Variable isEmpty handles errors for undefined, null, string, or empty objects
const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);


// Exports the module to use in other areas of the application
module.exports = isEmpty;