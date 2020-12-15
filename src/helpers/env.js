const path = require("path");
const envPath = path.join(__dirname, "..", "..", ".env");
require("dotenv").config({ path: envPath });
//
module.exports = (key, def) => {
    const { [key]: val } = process.env;
    return val !== undefined ? val : def;
};
