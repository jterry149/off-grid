// Variable isEmpty to test if values are empty by predefined test
const isEmpty = value => value === undefined || value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

// Export isEmpty to be used in the app
export default isEmpty;