// Load the http module from Node's standard library
const http = require("http");

// The hostname we will run the server on.
// 127.0.0.1 is the localhost
const hostname = "127.0.0.1";
// The port the server will listen on.
const port = 3000;

// Create the server.
// The server requires a function with parameters req, res
// that will run when requests are received from a web browser.
// req - the incoming request from the web browser.
// res - the outgoing response we will send from the browser.
const server = http.createServer(function(req, res) {
    // Log the requested URL to the console.
    console.log("Requested URL:", req.url);
    
    // Check if the requested URL is "/roehampton".
    if (req.url === "/roehampton") {
        // Respond with a specific message.
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello from Roehampton!");
    } else {
        // Respond with a default message.
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello, " + req.url);
    }
});

// Start the server listening on the port of the hostname.
// A function is required to execute on successful server start.
// Notice these are backticks ` and not single quotes '.
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});
