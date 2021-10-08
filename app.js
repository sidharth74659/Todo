const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const connectDB = require('./config/db.js')
const authRoute = require('./routes/auth.js')

//  Accessing a Model
const User = require('./models/User.js')

dotenv.config({path: './config/config.env'})

connectDB()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {        
    res.sendFile('index.html');
});


// Routes
app.use('/login', authRoute)

// LISTEN TO PORT
app.listen(process.env.PORT, () => {
    console.log("running" + process.env.PORT);
})