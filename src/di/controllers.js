module.exports = {
    services: {
        "auth.controller": {
            class: "controllers/AuthController",
            arguments: ["@repositories.user"],
        },
        "user.controller": {
            class: "controllers/UserController",
            arguments: ["@repositories.user"],
        },
    },
};
