const path = require("path");
const di = require(path.join(__dirname, "..", "di", "index"));
//
class AuthValidators {
    static registerBodyValidation(req, res, next) {
        const validationSchema = di.get("auth.registerBodyValidationSchema");
        const { error } = validationSchema.validate(req.body, { abortEarly: false });
        //
        if (!error) {
            next();
        } else return res.send(error);
    }
}
//
module.exports = AuthValidators;
