

require("dotenv-flow").config()

const express =  require("express");

const {DB_CONNECTION,PORT} = process.env

console.log("Lancé en"  , PORT)



require('express-async-errors')

const mongoose = require('mongoose')

const app = express();
const router = require("./routes");


app.use(async(req,res,next) => {
    await mongoose.connect(DB_CONNECTION)
    
    console.log('Connection réussie ! ')
    next();
})

app.use('/',router)

app.use(express.json())



app.listen(8080,() => {
    console.log(`Server up sur le port  : ${PORT}`)
})
