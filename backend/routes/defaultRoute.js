// Requirements
const router = require('express').Router()

router.all('*', (req, res) => {
    res.status(404).send('These are not the droids you\'re looking for. Route not found');
})

// Export the router
module.exports = router;
