const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const MONGO_URI = process.env.MONGO_URI
console.log(MONGO_URI)
mongoose.connect(MONGO_URI).then(()=>console.log("Connected")).catch((e)=>console.log("Error",e))