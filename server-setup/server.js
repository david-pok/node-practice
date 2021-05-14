const express = require("express"); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get("/", (req, res) => {
  res.send("Hello from Express");
});

// this request handler executes when making a GET request to /about
server.get("/about", (req, res) => {
  res.status(200).send("<h1>About Us</h1>");
});

// this request handler executes when making a GET request to /contact
server.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact Form</h1>");
});

// watch for connections on port 5000
server.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
