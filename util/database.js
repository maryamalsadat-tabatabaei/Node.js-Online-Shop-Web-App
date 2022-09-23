const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://maryam-tb:${process.env.MONGO_DB_PASSWORD}@node-project.6mr8s0d.mongodb.net/test?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      // throw err;
    });
};

const getDb = (err) => {
  if (_db) {
    return _db;
  }
  console.log(err);
  // throw "No database found!";
};

exports.getDb = getDb;
exports.mongoConnect = mongoConnect;
