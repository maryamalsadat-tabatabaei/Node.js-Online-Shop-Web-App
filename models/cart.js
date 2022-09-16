const path = require("path");
const fs = require("fs");
const rootPath = require("../util/path");

const cartPath = path.join(rootPath, "data", " cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //fetch prev cart
    fs.readFile(cartPath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.quantity += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, quantity: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += +productPrice;
      fs.writeFile(cartPath, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
  static deleteProduct(id, productPrice) {
    fs.readFile(cartPath, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.products.find((item) => item.id === id);
      if (!product) {
        return;
      }
      const productQty = product.quantity;
      updatedCart.products = updatedCart.products.filter(
        (item) => item.id !== id
      );
      updatedCart.totalPrice -= productQty * productPrice;
      fs.writeFile(cartPath, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }
  static getCart(cb) {
    fs.readFile(cartPath, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};
