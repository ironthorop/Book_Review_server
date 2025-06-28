const express = require("express");
const bookRoutes = require("./src/routes/BookRoutes.js");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const redisClient = require("./src/utils/redis.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDocument = YAML.load("swagger.yaml");

app.use(express.json());
app.use("/books", bookRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on port", process.env.PORT || 3000)
);

module.exports = app;
