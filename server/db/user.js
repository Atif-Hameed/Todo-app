const mongoose = require('mongoose')

const user = mongoose.Schema({
    fName : String,
    lName : String,
    email : String,
    password : String
})

module.exports = mongoose.model('user', user, 'user')