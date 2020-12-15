//
class registerBodyValidationSchema {
    static create(Joi) {
        const path = require("path");
        const di = require(path.join(__dirname, "..", "di", "index"));
        //
        const { name, surname, email, password, password_repeat } = di.get("validation.errorMessages");
        //
        return Joi.object({
            name: Joi.string().min(3).max(64).required().messages(name),
            surname: Joi.string().min(3).max(64).required().messages(surname),
            email: Joi.string().email().min(3).max(64).required().messages(email),
            password: Joi.string().min(8).max(255).required().messages(password),
            password_repeat: Joi.any().valid(Joi.ref("password")).required().messages(password_repeat),
        });
    }
}
//
module.exports = registerBodyValidationSchema;
