/**
 * CONEXIÓN CON LA BASA DE DATOS
 */
const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("db connected hola"));

async function connectDb({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  mongoose.connect(uri, { useNewUrlParser: true });
}

module.exports = connectDb;
