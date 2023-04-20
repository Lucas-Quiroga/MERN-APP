const Product = require("../models/Product");

//fúncion para crear producto (MÉTODO POST)
async function addProduct(req, res) {
  try {
    const { name, size, unitaryPrice, description } = req.body;

    const product = Product({
      name,
      size,
      unitaryPrice,
      description,
    });

    if (req.file) {
      const { filename } = req.file;
      product.setImgUrl(filename);
    }

    const productStored = await product.save();

    res.status(201).send({ productStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

//fúncion para obtener producto (MÉTODO GET)
async function getProducts(req, res) {
  //lean = lo que retorne la consulta lo devuelve en objetos planos de js | exec = indica que ejecuta la consulta y retorna la promesa (todos son metodos de mongoose)
  const products = await Product.find().lean().exec();
  res.status(200).send({ products });
}

module.exports = {
  addProduct,
  getProducts,
};
