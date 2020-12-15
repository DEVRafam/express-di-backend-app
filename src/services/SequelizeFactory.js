const { Sequelize } = require("sequelize");
const path = require("path");
//
class SequelizeFactory {
    static create(config, DataTypes) {
        const { name, password, host, dialect, user } = config.database;
        //
        const sequelize = new Sequelize(name, user, password, {
            host,
            dialect,
        });
        //
        const allModels = require(path.join(__dirname, "..", "models", "index"))(sequelize, DataTypes);
        //
        return allModels;
    }
}
module.exports = SequelizeFactory;
