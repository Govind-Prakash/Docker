// Import required modules
var express = require('express');
var path = require('path');
var fs = require('fs');

// Create an instance of Express
var app = express();

// Serve the main HTML file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the profile picture
app.get('/profile-picture', function (req, res) {
  // Read the image file synchronously
  var img = fs.readFileSync('profile-1.jpg');

  // Set the appropriate headers and send the image
  res.writeHead(200, { 'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
