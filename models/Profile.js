// Required dependencies and files
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for User Profile
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    location: {
        type: String
    },
    bio: {
        type: String
    },
    vehicle: [{  
        make: {
            type: String,
            required:true
        },
        model: {
            type: String,
            required:true
        },
        year: {
            type:String,
            required: true
        }
    }],    
    social: {
        youtube: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        }
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});


// Export the ProfileSchema'
module.exports = Profile = mongoose.model('profile', ProfileSchema);;
