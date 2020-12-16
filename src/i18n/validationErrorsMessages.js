const generateErrorMessages = (location, text) => {
    if (location === "pl") {
        return {
            "string.empty": `${text}`,
            "any.required": `${text}`,
            "string.max": "Maksymalna ilość znaków to {#limit}",
            "string.min": "Minimalna ilość znaków to {#limit}",
        };
    }
};
//
class ErrorMessages {
    static create(location = "pl") {
        //
        if (location === "pl") {
            return {
                name: {
                    ...generateErrorMessages(location, "Imię jest wymagane!"),
                },
                surname: {
                    ...generateErrorMessages(location, "Nazwisko jest wymagane!"),
                },
                email: {
                    ...generateErrorMessages(location, "Adres email jest wymagany!"),
                    "string.email": "Nieprawidłowy format adresu email",
                },
                password: {
                    ...generateErrorMessages(location, "Hasło jest wymagane!"),
                },
                password_repeat: {
                    "any.only": "Potwierdzenie hasła musi być takie samo jak oryginał",
                    "any.required": "Potwierdzenie hasła jest wymagane",
                },
            };
        }
    }
}
//
module.exports = ErrorMessages;
