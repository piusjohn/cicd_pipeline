// src/index.js
const express = require('express');
const app = express();

// Define a route that sends "Hello from Jenkins CI/CD Pipeline!" as a response
app.get('/', (req, res) => {
  res.send('Hello from Jenkins CI/CD Pipeline!');
});

// Listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`App is running and accessible at http://localhost:${port}`);
});
