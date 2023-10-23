const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook } = require('../controller/books');

router.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Homepage',
    data: [],
  });
});

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);

module.exports = router;