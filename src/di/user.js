module.exports = {
    services: {
        "controllers.user": {
            class: "controllers/UserController",
            arguments: ["@repositories.user"],
        },
    },
};
