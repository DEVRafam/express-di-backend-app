module.exports = {
    services: {
        "auth.controller": {
            class: "controllers/AuthController",
            arguments: ["@repositories.user"],
        },
    },
};
