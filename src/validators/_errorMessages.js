const lengthMessages = {
    "string.max": "Maksymalna ilość znaków to {#limit}",
    "string.min": "Minimalna ilość znaków to {#limit}",
};
//
class ErrorMessages {
    static create() {
        return {
            name: {
                "any.required": "Imię jest wymagane",
                "string.empty": "Imię jest wymagane!",
                ...lengthMessages,
            },
            surname: {
                "any.required": "Nazwisko jest wymagane",
                "string.empty": "Nazwisko jest wymagane!",
                ...lengthMessages,
            },
            email: {
                "any.required": "Adres email jest wymagany",
                "string.email": "Nieprawidłowy format adresu email",
                "string.empty": "Adres email jest wymagany!",
                ...lengthMessages,
            },
            password: {
                "any.required": "Hasło jest wymagane",
                "string.empty": "Nazwisko jest wymagane!",
                ...lengthMessages,
            },
            password_repeat: {
                "any.only": "Potwierdzenie hasła musi być takie samo jak oryginał",
            },
        };
    }
}
//
module.exports = ErrorMessages;
