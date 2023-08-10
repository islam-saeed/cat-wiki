const express = require('express')

const router = express.Router()

// get all controller functions
const { getAllBreeds, getBreed, getImages, getImage, addSearch, getSearches } = require('../controllers/catController')


// get breeds
router.get('/',getAllBreeds)

// get 10 images of a cat breed
router.get('/images/:id',getImages)

// get a single image of a cat breed
router.get('/image/:id',getImage)

// get the top searched breeds
router.get('/search/',getSearches)

// get breed information
router.get('/:id',getBreed)

// add a search to db
router.post('/search/:id',addSearch)



module.exports = router