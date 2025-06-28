const {
  getBookModel,
  getReviewModel,
  initSequelize,
} = require("../models/initSequelize");
const redisClient = require("../utils/redis");

// Ensure Sequelize is initialized before using models
initSequelize();

const getBooks = async (req, res) => {
  try {
    const Book = getBookModel();
    const cacheKey = "books";
    const cached = await redisClient.get(cacheKey);
    if (cached) return res.json(JSON.parse(cached));
    const books = await Book.findAll();
    await redisClient.set(cacheKey, JSON.stringify(books), { EX: 3600 });
    return res.json(books);
  } catch (err) {
    const Book = getBookModel();
    const books = await Book.findAll();
    return res.json(books);
  }
};

const createBook = async (req, res) => {
  const Book = getBookModel();
  const book = await Book.create(req.body);
  await redisClient.del("books");
  res.status(201).json(book);
};

const getBookReviews = async (req, res) => {
  const Review = getReviewModel();
  const reviews = await Review.findAll({ where: { bookId: req.params.id } });
  res.json(reviews);
};

const addReview = async (req, res) => {
  const Book = getBookModel();
  const Review = getReviewModel();
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  const review = await Review.create({ ...req.body, bookId: book.id });
  res.status(201).json(review);
};

module.exports = {
  getBooks,
  createBook,
  getBookReviews,
  addReview,
};
