// Prompt the user for their name
let userName = prompt("What's your name?");

// Check if the user entered a name
if (userName) {
    // If a name is provided, greet the user
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    // If no name is provided, greet as a guest
    alert("Hello, guest! Welcome to our website.");
}

