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

//fúncion para eliminar un producto (MÉTODO DELETE)
async function deleteProduct(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
};
