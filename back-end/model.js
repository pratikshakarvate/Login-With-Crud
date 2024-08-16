const mongoose = require('mongoose');

const myProject = mongoose.Schema({
    name:String,
    rollno:Number,
    email:String,
    image:String,
});
module.exports= mongoose.model('register',myProject);