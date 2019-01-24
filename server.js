// Required dependencies and files 
const express = require('express');
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Variable initialized for express
const app = express();

// Datbase Config
const db = require('./config/keys').MONGO_URI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("mongoDB connected"))
.catch(err => console.log(err));;
    

// Initial testing route
app.get('/', (req,res) => res.send('Hello World'));

// Request go through our middleware routes
app.use(users);
app.use(profile);
app.use(posts);

// Variable to set the port
const port = process.env.PORT
|| 5000;

app.listen(port, function()
{
    console.log('Server running on port ' + port);
});

