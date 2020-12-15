class UserModelSchema {
    static create(DataTypes) {
        const { STRING, TEXT } = DataTypes;
        //
        return {
            name: {
                type: STRING,
                allowNull: false,
            },
            surname: {
                type: STRING,
                allowNull: false,
            },
            email: {
                type: STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: STRING,
                allowNull: false,
            },
            token: {
                type: TEXT,
            },
        };
    }
}
module.exports = UserModelSchema;
