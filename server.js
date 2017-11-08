require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
    console.log(err)
})

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hello!!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Magic happening on port ' + PORT)
})