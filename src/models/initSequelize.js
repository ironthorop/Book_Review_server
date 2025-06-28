const { Sequelize } = require("sequelize");
const { defineBookModel } = require("./book.model.js");
const { defineReviewModel } = require("./review.model.js");

let sequelize;
let Book;
let Review;

function initSequelize() {
  sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dialect: "mysql",
      logging: false,
    }
  );

  // Define models
  Book = defineBookModel(sequelize);
  Review = defineReviewModel(sequelize);

  // Set up associations
  Book.hasMany(Review, { foreignKey: "bookId", onDelete: "CASCADE" });
  Review.belongsTo(Book, { foreignKey: "bookId" });

  return sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to MySQL with Sequelize");
      return sequelize.sync();
    })
    .catch((error) => {
      console.error("Unable to connect to MySQL:", error);
      throw error;
    });
}

module.exports = {
  initSequelize,
  getSequelize: () => sequelize,
  getBookModel: () => Book,
  getReviewModel: () => Review,
};
