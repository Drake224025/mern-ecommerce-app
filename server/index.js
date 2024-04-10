// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Product Routes
const productRoutes = require("./routes/product.routes");

dotenv.config(); // Load environment variables

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Basic Express setup
const app = express();
app.use(express.json()); // Enables parsing JSON request bodies
app.use(cors()); // Enables CORS
// Use the routes
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
