// If else statement to produce the correct keys for production environment and development environment
if (process.env.NODE_ENV === 'production')
{
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}