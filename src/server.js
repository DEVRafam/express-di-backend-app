const app = require("express")();
const env = require("./helpers/env");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
//
//DI Pattern app structure
//
const di = require(path.join(__dirname, "di", "index"));
//
//Tools
//
app.set("di", di);
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//
//Routes
//
const routes = require(path.join(__dirname, "routes", "index"))(di);
app.use("/api", routes);
//
//SWAGGER API
//
const swaggerDocument = require("../swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//
//Run server
//
const port = env("APP_PORT", 3000);
app.listen(port, () => console.log(`App is listining on port ${port}`));
