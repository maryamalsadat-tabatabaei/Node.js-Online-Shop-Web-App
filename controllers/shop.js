const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.fetchAllProdusts((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProductDetail = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findProductById(prodId, (product) => {
    res.render("shop/product-detail", {
      product,
      pageTitle: product.title,
      path: "/product-list",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAllProdusts((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAllProdusts((productsList) => {
      const cartProducts = [];
      productsList.forEach((element) => {
        const cartProductData = cart.products.find(
          (prod) => prod.id === element.id
        );
        cartProductData &&
          cartProducts.push({
            productData: element,
            quantity: cartProductData.quantity,
          });
      });
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findProductById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.findProductById(productId, (product) => {
    Cart.deleteProduct(productId, product.price);
    res.redirect("/cart");
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
