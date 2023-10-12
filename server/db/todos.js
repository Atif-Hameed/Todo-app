const mongoose = require('mongoose')
require('./config')

const Schema = mongoose.Schema({
    todo : String
})

module.exports = mongoose.model('works', Schema, 'works')