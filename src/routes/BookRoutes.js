const express = require("express");
const {
  getBooks,
  createBook,
  getBookReviews,
  addReview,
} = require("../controllers/BookController");

const router = express.Router();
router.get("/", getBooks);
router.post("/", createBook);
router.get("/:id/reviews", getBookReviews);
router.post("/:id/reviews", addReview);
module.exports = router;
