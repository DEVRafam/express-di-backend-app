const router = require("express").Router();

module.exports = (di) => {
    router.get("/", (req, res) => {
        res.send("alles klar");
    });
    //
    return router;
};
