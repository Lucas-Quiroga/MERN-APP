/**
 * INICIO DE API CON SUS RESPECTIVOS ENDPOINTS
 */
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const connectDb = require("./db/mongodb");
const { appConfig, dbConfig } = require("./config");

//inicializamos primero la base de datos y despúes el server
async function initApp(appConfig, dbConfig) {
  try {
    await connectDb(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`listen on ${appConfig.port}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

initApp(appConfig, dbConfig);
