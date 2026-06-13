function greetUser() {
    const name = document.getElementById("username").value;

    const greetingMessage = `Hello ${name}! Welcome to the site.`;

    document.getElementById("greeting").textContent =
        greetingMessage;
}