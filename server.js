const express = require('express')
const mongoose = require('mongoose')
const contact = require('./routes/contact')
const app = express()

app.use(express.json())

const mongo_URI = "mongodb+srv://admin:admin12345@contacts-j0nkp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongo_URI, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
    if(err){
        throw err
    }
    else{
            console.log("Database conncted...")
        
    }
})

app.use('/api', contact)

app.listen(5000, (err) => {
    if(err){
        throw err
    }
    else{
            console.log("server is up and running on port 5000")
        }
    })
