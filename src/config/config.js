const path = require("path");
const env = require(path.join(__dirname, "..", "helpers", "env"));
//
const name = env("DATABASE_NAME", "erpsystem"),
    user = env("DATABASE_USERNAME", "root"),
    password = env("DATABASE_PASSWORD", ""),
    dialect = env("DATABASE_DIALECT", "mysql"),
    host = env("DATABASE_HOST", "localhost"),
    port = env("DATABASE_PORT", 5432);
module.exports = {
    database: {
        name,
        user,
        password,
        dialect,
        host,
        url: `${dialect}://${user}:${password}@${host}:${port}/${name}`,
    },
    tokens: {
        access_secret: env("ACCESS_TOKEN_SECRET", "access_secret"),
        refresh_secret: env("REFRESH_TOKEN_SECRET", "refresh_secret"),
        expiration: env("TOKEN_EXPIRATION", "10m"),
    },
};
