let output = "";

function validatePassword(password) {

    try {

        if (password.length < 6) {
            throw new Error(
                "Password must be at least 6 characters long"
            );
        }

        output = "Password is valid";

    } catch (error) {
        output = error.message;
    }
}