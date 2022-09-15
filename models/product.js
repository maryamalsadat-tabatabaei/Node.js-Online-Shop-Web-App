const path = require("path");
const fs = require("fs");
const rootPath = require("../util/path");

const productsPath = path.join(rootPath, "data", " products.json");
const getProductsFromFile = (cb) =>
  fs.readFile(productsPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(productsPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAllProdusts(cb) {
    getProductsFromFile(cb);
  }
};
