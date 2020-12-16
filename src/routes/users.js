const router = require("express").Router();
const path = require("path");
//
module.exports = (di) => {
    // get all necessary validators middlewares
    // user data structure validators
    const { registerBodyValidation, updateUserBodyValidation } = require(path.join(__dirname, "..", "middlewares", "UserValidators"));
    // authorization middlewares
    const { verifyApiKey } = require(path.join(__dirname, "..", "middlewares", "AuthValidators"));
    //
    const userController = di.get("user.controller");
    //
    router.get("/", (req, res) => {
        res.send("alles klar");
    });
    //
    //get all
    router.get("/all", (...args) => userController.getAll(...args));
    //get single
    router.get("/:id", (...args) => userController.getSingle(...args));
    //register
    router.post("/", [registerBodyValidation], (...args) => userController.createWithParams(...args));
    //delete
    router.delete("/:id", [verifyApiKey], (...args) => userController.deleteSingleUser(...args));
    //update
    router.put("/:id", [verifyApiKey, updateUserBodyValidation], (...args) => userController.updateSingleUser(...args));
    //
    return router;
};
