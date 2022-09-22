const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://maryam-tb:${MONGO_DB_PASSWORD}@node-project.6mr8s0d.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.getDb = getDb;
exports.mongoConnect = mongoConnect;
