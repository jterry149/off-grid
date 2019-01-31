// Required dependencies and files
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for User Profile
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
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
        truck: [{   
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
        car: [{   
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
        rv: [{   
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
        motorhomes: [{   
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
        van: [{   
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
        suv: [{   
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
        motorcycle: [{   
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
        }]     
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

// Creates our model from the above schema using mongoose model method
const Profile = mongoose.model('Profile', ProfileSchema);

// Export the ProfileSchema'
module.exports = Profile;
