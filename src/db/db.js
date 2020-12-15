const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const env = require(path.join(__dirname, "..", "helpers", "env"));
//
const name = env("DATABASE_NAME", "erpsystem");
const user = env("DATABASE_USERNAME", "root");
const password = env("DATABASE_PASSWORD", "");
const dialect = env("DATABASE_DIALECT", "mysql");
const host = env("DATABASE_HOST", "localhost");
//
const sequelize = new Sequelize(name, user, password, {
    host,
    dialect,
});
//
sequelize
    .authenticate()
    .then(() => {
        console.log("sequelize connected");
    })
    .catch((err) => {
        console.log(err);
    });
//
module.exports = sequelize;
