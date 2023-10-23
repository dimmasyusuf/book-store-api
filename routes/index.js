const express = require('express');
const router = express.Router();
const books = require('./books');

router.use('/api', books);

router.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Welcome to Book Store API',
    data: [],
  });
});

module.exports = router;
