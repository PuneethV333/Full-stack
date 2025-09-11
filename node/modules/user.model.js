const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        minlength: [3, 'username nust be at least 3 char long']

    },

    emial: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        minlength: [13, 'username nust be at least 13 char long']
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: [5, 'username nust be at least 5 char long']
    }


})


const user = mongoose.model('user',userSchema)

module.exports = user