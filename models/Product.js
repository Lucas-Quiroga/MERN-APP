const mongoose = require("mongoose");

//definir modelos
const Schema = mongoose.Schema;

const ProductSchema = Schema(
  {
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", ProductSchema);
