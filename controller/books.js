const { Book } = require('../models');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json({
      status: 200,
      message: 'All books',
      data: books,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: {},
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: 404,
        message: 'Book not found',
        data: {},
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: 'Book found',
        data: book,
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: {},
    });
  }
};

const createBook = (req, res) => {
  const { title, description, author } = req.body;

  const id = books[books.length - 1].id + 1;

  const book = {
    id,
    title,
    description,
    author,
  };

  books.push(book);

  return res.status(201).json({
    status: 201,
    message: 'Book created',
    data: book,
  });
};

module.exports = { getAllBooks, getBookById, createBook };
