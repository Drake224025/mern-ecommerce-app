const mongoose = require("mongoose");
const faker = require("faker");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

// Load your Product model
const Product = require("./models/product.model");

// Connect to your MongoDB database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Could not connect to database", err));

const generateProducts = async (numProducts) => {
  try {
    for (let i = 0; i < numProducts; i++) {
      const product = new Product({
        name: faker.commerce.productName(),
        type: selectRandomElement(["tshirt", "cap"]), // Corrected line
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        sizes: selectRandomSizes(["S", "M", "L", "XL", "XXL"]),
        image: faker.image.fashion(),
      });
      await product.save();
    }

    console.log(`${numProducts} dummy products generated`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

function selectRandomSizes(sizesArray) {
  const numSizes = faker.datatype.number({ min: 1, max: 3 });
  const selectedSizes = [];

  for (let i = 0; i < numSizes; i++) {
    const randomIndex = faker.datatype.number({
      min: 0,
      max: sizesArray.length - 1,
    });
    selectedSizes.push(sizesArray[randomIndex]);
  }

  return selectedSizes;
}

function selectRandomElement(array) {
  const randomIndex = faker.datatype.number({ min: 0, max: array.length - 1 });
  return array[randomIndex];
}

generateProducts(30);
