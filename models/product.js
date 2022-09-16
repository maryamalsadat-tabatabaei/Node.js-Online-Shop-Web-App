const path = require("path");
const fs = require("fs");
const rootPath = require("../util/path");
const Cart = require("./cart");

const productsPath = path.join(rootPath, "data", " products.json");
const getProductsFromFile = (cb) =>
  fs.readFile(productsPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
const writeProductsToFile = (updatedProducts) => {
  fs.writeFile(productsPath, JSON.stringify(updatedProducts), (err) => {
    console.log(err);
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        writeProductsToFile(updatedProducts);
      } else {
        this.id = Math.random().toString();
        products.push(this);
        writeProductsToFile(products);
      }
    });
  }
  static fetchAllProdusts(cb) {
    getProductsFromFile(cb);
  }

  static findProductById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((item) => item.id === id);
      cb(product);
    });
  }

  static deleteProduct(id) {
    getProductsFromFile((products) => {
      const updatedProducts = products.filter((prod) => prod.id !== id);
      const product = products.find((prod) => prod.id === id);
      fs.writeFile(productsPath, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }
};
