const express = require("express");
// const Product = require("./models/product.model");
const router = express.Router();
const {
  getProducts,
  getProductDetail,
  createProduct,
  deleteProduct,
  updayteProduct,
} = require("../controllers/product.controller");

//get all products
router.get("/", getProducts);
//get product detail
router.get("/:id", getProductDetail);
//create product
router.post("/", createProduct);
//update product
router.put("/:id", updayteProduct);
//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
