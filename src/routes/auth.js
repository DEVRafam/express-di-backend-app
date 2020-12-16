const path = require("path");
const router = require("express").Router();
//
module.exports = (di) => {
    // get all necessary validators
    const { registerBodyValidation } = require(path.join(__dirname, "..", "middlewares", "UserValidators"));
    // extract auth controller
    const AuthController = di.get("auth.controller");
    //
    router.post("/register", [registerBodyValidation], AuthController.register);
    return router;
};
