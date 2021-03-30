/* ======================================================================
|
| Requirements
|
====================================================================== */
const router = require('express').Router();
const logic = require('./logic');


/* ======================================================================
|
| Routes
|
====================================================================== */
router.get('/', (req, res) => {
    const response = logic.someFunction();
    res.status(200).send(response);
})

router.post('/', (req, res) => {
    console.log('post');
    res.status(200).send('someRoute post ok');
})

module.exports = router;