const Sequelize = require("sequelize");
// require("dotenv").config({ path: "../vars/.env" });
require("dotenv").config();

const sequelize = new Sequelize(
  "node-project",
  "root",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
