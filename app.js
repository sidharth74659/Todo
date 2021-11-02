const express = require('express')
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
const path = require('path')
const app = express()
// const connectDB = require('./config/db.js')
const authRoute = require('./routes/auth.js')

// //  Accessing a Model
// const User = require('./models/User.js')

// dotenv.config({path: './config/config.env'})

// connectDB()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    console.log(__dirname + "afa")
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, './public/') })

})
// // Routes
app.use('/login', authRoute)

// // LISTEN TO PORT
const port = process.env.PORT || 3000

app.listen(port, () => {
    // console.log(`running ${port}`);
})