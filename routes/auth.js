// Authenticate Requests
const path = require('path')
const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc Auth with Google
// @route GET /login/
router.get('/', (req, res) => {
    res.sendFile('login.html', { root: path.join(__dirname, '../public/login') })
})
// @desc Auth with Google
// @route GET /login/google
router.get('/google', () => {
    passport.authenticate('google', { scope: ['profile'] })

});


// @desc Auth with Google
// @route GET /login/google/callback
router.get('/google/callback',
    passport.authenticate(
        'google',
        { failureRedirect: '/login' }
    ),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
)

module.exports = router