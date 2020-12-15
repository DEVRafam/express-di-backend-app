const path = require("path");
const scheme = require(path.join(__dirname, "..", "di", "index")).get("users.modelSchema");
//
module.exports = (sequelize, DataTypes) => {
    let User = {};
    //
    if (sequelize && DataTypes) {
        User = sequelize.define("User", {
            ...scheme,
        });
    }
    //
    return User;
    // User.associations()
};
