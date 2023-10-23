const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    description:
      'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.',
    author: 'J. K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    description:
      'Jurassic Park is a 1990 science fiction novel written by Michael Crichton.',
    author: 'Michael Crichton',
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    description:
      'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien.',
    author: 'J. R. R. Tolkien',
  },
];

const getAllBooks = (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Books retrieved',
    data: books,
  });
};

const getBookById = (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === Number(id));

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
