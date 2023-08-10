const mongoose = require('mongoose')

const Schema = mongoose.Schema

const searchModel = new Schema({
    breed: String,
    breedID: String,
    searched: Number
}, {timestamps: true})

module.exports = mongoose.model('search', searchModel)