// ------------------------------------------------------------------------------
// File: index.js — Main server script for the frontend Node.js application using Express
//
// Description:
// This file starts a simple web server that responds to HTTP requests.
// When a user visits the root path ("/"), the server replies with a message
// "Frontend: Hello from Node.js".
// The server listens on port 3000.
//
// It is mainly used to verify that the frontend container is working properly.
// ------------------------------------------------------------------------------

const express = require('express'); // Import the Express framework to create a web server

const app = express(); // Create an instance of an Express application

const port = 3000; // Define the port number the server will listen on

// Define a route handler for GET requests to the root URL "/"
app.get('/', (req, res) => {
  // Send a simple text response back to the client
  res.send('Frontend: Hello from Node.js');
});

// Start the server and begin listening on the specified port
app.listen(port, () => {
  // Log a message to the console to confirm that the server is running
  console.log(`Frontend app listening at http://localhost:${port}`);
});
