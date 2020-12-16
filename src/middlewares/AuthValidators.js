const path = require("path");
const di = require(path.join(__dirname, "..", "di", "index"));
//
class AuthValidators {
    //
    static verifyApiKey(req, res, next) {
        const { api_key: VALID_api_key } = process.env;
        const { api_key: GIVEN_api_key } = req.headers;
        //
        if (GIVEN_api_key === VALID_api_key) next();
        else res.sendStatus(401);
    }
    //
}
//
module.exports = AuthValidators;
