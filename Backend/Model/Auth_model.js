const mongoose = require('mongoose');

const userAuth = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('auth', userAuth);