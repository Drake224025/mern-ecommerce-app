// server/validation.js
const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  type: Joi.string().valid("tshirt", "cap").required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().min(0).required(),
  sizes: Joi.array().items(Joi.string().valid("S", "M", "L", "XL", "XXL")),
  image: Joi.string().uri().required(), // Assume image is a URL
});

module.exports = {
  productSchema,
};
