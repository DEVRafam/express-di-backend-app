const path = require("path");
const faker = require("faker");
//
module.exports = {
    up: async () => {
        const di = require(path.join(__dirname, "..", "di", "index"));
        const userRepository = di.get("repositories.user");
        //
        await userRepository.create({
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            email: faker.internet.email(),
            password: "password",
            token: "[]",
        });
    },

    down: async () => {},
};
