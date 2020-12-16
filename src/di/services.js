const path = require("path");
const config = require(path.join("..", "config", "config"));
const Joi = require("joi");
const { DataTypes } = require("sequelize");
//
module.exports = {
    parameters: {
        config,
        DataTypes,
        Joi,
    },
    services: {
        sequelize: {
            arguments: ["%config%", "%DataTypes%"],
            factory: {
                class: "services/SequelizeFactory",
                method: "create",
            },
        },
        "users.modelSchema": {
            arguments: ["%DataTypes%"],
            factory: {
                class: "services/UserModelSchema",
                method: "create",
            },
        },
        "auth.registerBodyValidationSchema": {
            arguments: ["%Joi%"],
            factory: {
                class: "services/registerBodyValidationSchema",
                method: "create",
            },
        },
        "i18n.errorMessages": {
            factory: {
                class: "i18n/validationErrorsMessages",
                method: "create",
            },
        },
    },
};
