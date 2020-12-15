const fs = require("fs");
const path = require("path");
//
module.exports = (sequelize, DataTypes) => {
    const indexFileName = path.basename(__filename);
    //get models paths
    const paths = fs.readdirSync(__dirname).filter((file) => file.slice(-3) === ".js" && file !== indexFileName);
    //Get models instances
    const models = {};
    paths.forEach((model) => {
        const name = model.split(".")[0];
        models[name] = require(`./${model}`)(sequelize, DataTypes);
    });
    return models;
};
