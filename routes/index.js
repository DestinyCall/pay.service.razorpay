'use strict';
const router = require('express').Router();

const razorpay = require('./razorpay');

router.use('/pay/razorpay', razorpay);

module.exports = router;
