let output = "";

class EmailError extends Error {
    constructor(message) {
        super(message);
        this.name = "EmailError";
    }
}

function validateEmail(email) {

    try {

        if (!email.includes("@")) {
            throw new EmailError(
                "Invalid email address"
            );
        }

        output = "Email is valid";

    } catch (error) {
        output = error.message;
    }
}