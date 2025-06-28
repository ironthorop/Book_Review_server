const { DataTypes } = require("sequelize");

function defineBookModel(sequelize) {
  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Book;
}

module.exports = { defineBookModel };
