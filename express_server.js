// Import express.js
const express = require("express");

// Create express app
var app = express();

// Create a get for root - /
app.get("/", function(req, res) {
    res.send("Hello world!");
});

// Create a route for /goodbye
// Responds to a 'GET' request
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    // We can examine it in the console for debugging purposes
    console.log(req.params);
    //  Retrieve the 'name' parameter and use it in a dynamically generated page
    res.send("Hello " + req.params.name);
});

// Create a route for user profiles
// Responds to a 'GET' request
app.get("/user/:id", function(req, res) {
    const userId = req.params.id; // Retrieve the user ID from the URL
    res.send(`Hello user ${userId}`);
});

// Create a route for products in an online store
// Responds to a 'GET' request
app.get("/product/:id", function(req, res) {
    const productId = req.params.id; // Retrieve the product ID from the URL
    res.send(`This is product ${productId}`);
});

// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});