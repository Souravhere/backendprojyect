const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    card: {
        type:  Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String
})

module.exports = mongoose.model('user', userSchema);