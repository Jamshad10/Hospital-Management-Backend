const express = require('express');
const router = express.Router();

const {

    adminSignup

} = require('../controller/admin');

//admin routing
router.post('/adminSignup',adminSignup)

module.exports = router;
