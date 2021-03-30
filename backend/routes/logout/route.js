/* ======================================================================
|
| Requirements
|
====================================================================== */
const router = require('express').Router();
// const logic = require('./logic');


/* ======================================================================
|
| Routes
|
====================================================================== */
router.get('/', (req, res) => {
    req.session.logged = false;
    res.status(200).json({success: true});
})

module.exports = router;