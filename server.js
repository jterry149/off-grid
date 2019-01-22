// Dependencies
const express = require('express');

// Variable initialized for express
const app = express();

// Initial testing route
app.get('/', function(res,res)  
{
    res.send('Hello World');
});

// Variable to set the port
const port = process.env.PORT
|| 5000;

app.listen(port, function()
{
    console.log('Server running on port ' + port);
});

