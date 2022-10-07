const express = require("express");
const { body } = require("express-validator");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/products", isAuth, adminController.getProducts);

router.get("/add-product", isAuth, adminController.getAddProduct);

router.post(
  "/add-product",
  [
    body("title", "Title must be string and at least 3 character.")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body("price", "Price is required").isFloat(),
    body(
      "description",
      "description must be at least 10 and at last 400 character"
    )
      .isLength({ min: 10, max: 400 })
      .trim(),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    body("title", "Title must be string and at least 3 character.")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body("price", "Price is required").isFloat(),
    body(
      "description",
      "description must be at least 10 and at last 400 character"
    )
      .isLength({ min: 10, max: 400 })
      .trim(),
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
