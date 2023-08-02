// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. 
// You can use any library or framework of your choice.

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
