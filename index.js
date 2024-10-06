const express = require("express");
const mongoose = require("mongoose"); // use to create model
// const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json()); // use to return json when u use body json
app.use(express.urlencoded({ extended: false })); // use to allow use can use form urlencoded

//routes
app.get("/", function (req, res) {
  res.send("Hello from server node js");
});
app.use("/api/products", productRoute);

//this how on termial when running
// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });
//res : respose from server

//get all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//     // res.send(req.body); // use to respose data  from body
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
//   res.send();
// });

//get products detail
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//     // res.send(req.body); // use to respose data  from body
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
//   res.send();
// });

//create product
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//     // res.send(req.body); // use to respose data  from body
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//update product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//     // res.send(req.body); // use to respose data  from body
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
//   res.send();
// });

//delete product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json("Product has been deleted");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
//   res.send();
// });

mongoose
  .connect(
    "mongodb+srv://tphourac:5HejaGP1oiJZw1vZ@backenddb.osvgt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  });
