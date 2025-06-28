const { DataTypes } = require("sequelize");

function defineReviewModel(sequelize) {
  const Review = sequelize.define("Review", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      index: true,
    },
  });
  return Review;
}

module.exports = { defineReviewModel };
