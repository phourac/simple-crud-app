//controller  use for responsible for handling the business logic of the application,
//specifically in terms of responding to requests and managing data interactions.

const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updayteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

module.exports = {
  getProducts,
  getProductDetail,
  createProduct,
  updayteProduct,
  deleteProduct,
};
