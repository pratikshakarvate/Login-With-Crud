const mongoose = require('mongoose');

const myProjectSchema  = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    mobileno: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        ]
    },
    city: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    lang: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
});
module.exports= mongoose.model('register',myProjectSchema);