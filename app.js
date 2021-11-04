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

app.get('/signup', (req, res) => {
    res.sendFile('signup.html', { root: path.join(__dirname, './public/login') })

})

// // Routes
// app.use('/signin', authRoute)
app.use('/signin', (req, res) => {
    res.sendFile('login.html', { root: path.join(__dirname, './public/login') })

})

// // LISTEN TO PORT
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`running ${port}`);
})