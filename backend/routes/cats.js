const express = require('express')

const router = express.Router()

// get all controller functions
const { getAllBreeds, getBreed, getImages, getImage } = require('../controllers/catController')


// get breeds
router.get('/',getAllBreeds)

// get 10 images of a cat breed
router.get('/images/:id',getImages)

// get a single image of a cat breed
router.get('/image/:id',getImage)

// get breed information
router.get('/:id',getBreed)


module.exports = router