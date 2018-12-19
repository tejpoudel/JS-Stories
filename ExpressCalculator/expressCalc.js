var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.get('/:operator/:num1/:num2', function (req, res) {
    console.log("Its working");

    var operation = req.params.operator;
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var result;
    // Initialize the result variable to send later
    var result;
    // Switch statement chooses operation based on the operation parameter.
    switch (operation) {
        // BONUS - How could you use * + etc. inside the app.get()?
        case "add":
            result = add(num1, num2);
            // Add your logic here. Pun intended.
            break;
        case "subtract":
            result = subtract(num1, num2);
            // Subtract logic
            break;
        case "multiply":
            result = multiply(num1, num2);

            // Multiply
            break;
        case "divide":
            result = divide(num1, num2);
        // Divide
        default:
            // Handle anything that isn't specified
            result =
                "Sorry! The only valid operations are add, subtract, multiply, and divide.";
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    // We return the result back to the user in the form of a string
    res.send(result.toString());

});

app.listen(PORT, function () {
    console.log("Server is running on localhost " + PORT);
});