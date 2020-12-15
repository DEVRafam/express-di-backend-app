module.exports = {
    services: {
        "repositories.user": {
            class: "repositories/UserRepository",
            arguments: ["@sequelize"],
        },
    },
};
