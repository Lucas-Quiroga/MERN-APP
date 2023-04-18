/**
 * INICIO DE API CON SUS RESPECTIVOS ENDPOINTS
 */
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const { appConfig } = require("./config");

const app = express();

app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`));
