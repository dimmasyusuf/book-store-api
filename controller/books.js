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

const createBook = async (req, res) => {
  try {
    const { title, description, author } = req.body;

    const book = await Book.create({
      title,
      description,
      author,
    });

    return res.status(201).json({
      status: 201,
      message: 'Book created',
      data: book,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: {},
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author } = req.body;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: 404,
        message: 'Book not found',
        data: {},
      });
    } else {
      const updatedBook = await book.update({
        title,
        description,
        author,
      });

      return res.status(200).json({
        status: 200,
        message: 'Book updated',
        data: updatedBook,
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

const deleteBook = async (req, res) => {
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
      await book.destroy();
      return res.status(200).json({
        status: 200,
        message: 'Book deleted',
        data: {},
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

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
