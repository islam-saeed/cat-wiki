const mongoose = require('mongoose')

const Schema = mongoose.Schema

const searchModel = new Schema({
    breed: String,
    breedID: String,
    searched: Number
})

module.exports = mongoose.Model('search', searchModel)