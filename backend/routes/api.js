// Requirements
const router = require('express').Router();

// Routes
const someRoute = require('./someRoute/route.js');
router.use('/someRoute', someRoute);

// Sign in
const signin = require('./signin/route.js');
router.use('/signin', signin);
// Login
const login = require('./login/route.js');
router.use('/login', login);
// Logout
const logout = require('./logout/route.js');
router.use('/logout', logout);
// Logged
const logged = require('./logged/route.js');
router.use('/logged', logged);


router.get('/', (req, res) => {
    res.status('200').send('Welcome to the api!')
})

// Export the router
module.exports = router;