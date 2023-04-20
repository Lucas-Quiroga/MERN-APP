const Product = require("../models/Product");

//fúncion para crear producto
async function addProduct(req, res) {
  try {
    const { name, size, unitaryPrice, description } = req.body;

    const product = Product({
      name,
      size,
      unitaryPrice,
      description,
    });

    const productStored = await product.save();

    res.status(201).send({ productStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  addProduct,
};
