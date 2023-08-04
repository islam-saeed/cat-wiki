// to use the .env to hide sensitive data
require('dotenv').config()

const express = require('express')

const router = require('./routes/cats')

const app = express()

// to be able to use json
app.use(express.json())

// get info about the incoming requests
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

// add /breed to all routes
app.use('/breed',router)

// listen for incoming requests
try{
    app.listen(process.env.PORT,() => {
        console.log(`listening on port : ${process.env.PORT}`)
    })
} catch(e) {
    e => console.log(e.message)
}