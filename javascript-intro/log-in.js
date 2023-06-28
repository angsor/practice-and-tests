let loginUsername = prompt("Please enter your name");

if (loginUsername == "Admin") {
    password = prompt("Please enter your password:");
    if (password == "TheMaster") {
        alert("Welcome!");
    }
        else if (password == null || " ") {
            alert("cancelled");
        }
        else {
            alert("Wrong Password");
        };
}
    else if (loginUsername == null || "") {
        alert("Cancelled");
    }
    else {
        alert("I don't know you");
    }