let output = "";

function convertString(input) {

    try {
        output = input.toUpperCase();
    }
    catch (error) {
        output = "Input is not a valid string";
    }
}