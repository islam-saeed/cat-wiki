// to hide any sensitive data
require('dotenv').config()

const mongoose = require('mongoose')

const catModel = require('../models/catSearch')

// to use fetch for the external api
const fetch = require('node-fetch')

// fetch all the breeds and display the error if there was any
const getAllBreeds = async (req, res) => {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/breeds?&page=0')
        const data = await response.json()
        console.log(Object.keys(data).length)
        res.status(200).json(data)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

// fetch a single breed and display the error if there was any
const getBreed = async (req, res) => {
    try{
        const id = req.params.id
        const response = await fetch('https://api.thecatapi.com/v1/breeds/'+id)
        const data = await response.json()
        res.status(200).json(data)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

// fetch 10 images and display the error if there was any
const getImages = async (req, res) => {
    const id = req.params.id
    try{
        const options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'api_key' : process.env.API_KEY
            }
        }
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?format=json&limit=10&breed_ids=${id}`,options)
        const data = await response.json()
        res.status(200).json(data)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

// fetch a single image
const getImage = async (req, res) => {
    const id = req.params.id
    try{
        const options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'api_key' : process.env.API_KEY
            }
        }
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?format=json&limit=1&breed_ids=${id}`,options)
        const data = await response.json()
        res.status(200).json(data)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}


// add a search to the db
const addSearch = async (req, res) => {
    const id = req.params.id
    const response = await catModel.find({breedID: id})
    if(response.length === 0) {
        try{
            const fetchResponse = await fetch('https://api.thecatapi.com/v1/breeds/'+id)
            const data = await fetchResponse.json()
            const search = await catModel.create({
                breed: data.name,
                breedID: data.id,
                searched: 1
            })
            res.status(200).json(search)
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    } else {
        try{
            const update = await catModel.updateOne({breedID: id},{searched: response[0].searched+1})
            res.status(200).json(update)
        } catch (e) {
            res.status(400).json({error: e.message})
        }
    }
}

// get the top searched breeds
const getSearches = async (req,res) => {
    const response = await catModel.find().sort({searched: 'desc'})
    res.json(response)
}


module.exports = {
    getAllBreeds,
    getBreed,
    getImages,
    getImage,
    addSearch,
    getSearches
}