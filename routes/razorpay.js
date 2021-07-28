'use strict';
const router = require('express').Router();
const _ = require('lodash');

//Trigger Razor Pay payment gateway

router.post('/online', (req, res, next) => {
  res.send('Razorpay Online Payment');
});

module.exports = router;
