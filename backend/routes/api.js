// Requirements
const router = require('express').Router();

// Routes
const someRoute = require('./someRoute/route.js');
router.use('/someRoute', someRoute);

router.get('/', (req, res) => {
    res.status('200').send('Welcome to the api!')
})

// Export the router
module.exports = router;