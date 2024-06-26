const mongoose = require('mongoose')

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('User', User);
