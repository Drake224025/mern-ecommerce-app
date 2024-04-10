// models/product.model.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes any leading/trailing spaces
  },
  type: {
    type: String,
    enum: ["tshirt", "cap"], // Limits type to only these values
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: [
    {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"], // Standard sizes
    },
  ],
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
