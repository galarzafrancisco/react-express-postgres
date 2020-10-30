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
    const status = logic.getStatus();
    res.status(status.code).send(status.message);
})

module.exports = router;