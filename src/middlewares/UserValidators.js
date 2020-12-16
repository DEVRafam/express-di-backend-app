const path = require("path");
const Joi = require("joi");
const di = require(path.join(__dirname, "..", "di", "index"));
const validationSchema = di.get("auth.registerBodyValidationSchema");
//
//helpers
//
const handleValidation = (body, schema, res, next) => {
    const { error } = Joi.object(schema).validate(body, { abortEarly: false });
    //
    if (!error) next();
    else {
        //create better error response
        const betterErrorFeedback = {};
        error.details.forEach((singleError) => {
            const field = singleError.path[0];
            const msg = singleError.message;
            //
            betterErrorFeedback[field] = msg;
        });
        //
        return res.status(400).send(betterErrorFeedback);
    }
};
//
class UserValidators {
    //
    static registerBodyValidation(req, res, next) {
        handleValidation(req.body, validationSchema, res, next);
    }
    //
    static updateUserBodyValidation(req, res, next) {
        //exclude some properites from validationSchema object
        const { password, password_repeat, email, ...validationSchemaToUpdate } = validationSchema;
        //then run validation
        handleValidation(req.body, validationSchemaToUpdate, res, next);
    }
}
//
module.exports = UserValidators;
